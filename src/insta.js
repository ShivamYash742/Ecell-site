const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');

const router = express.Router();

// Create images directory if it doesn't exist
const IMAGES_DIR = path.join(__dirname, 'public', 'images');

// Initialize images directory
async function initializeImagesDirectory() {
  try {
    await fs.mkdir(IMAGES_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating images directory:', error);
  }
}

initializeImagesDirectory();

async function downloadImage(imageUrl) {
  try {
    const filename = crypto.createHash('md5').update(imageUrl).digest('hex') + '.jpg';
    const filepath = path.join(IMAGES_DIR, filename);

    // Check if image already exists
    try {
      await fs.access(filepath);
      return `/images/${filename}`;
    } catch {
      // File doesn't exist, continue with download
    }

    const response = await axios({
      method: 'GET',
      url: imageUrl,
      responseType: 'stream',
      timeout: 5000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    const writer = fs.createWriteStream(filepath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => resolve(`/images/${filename}`));
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Error downloading image from ${imageUrl}:`, error.message);
    return null;
  }
}

// API endpoint to get Instagram posts
router.get('/api/instagram-posts', async (req, res) => {
  try {
    const postsFilePath = path.join(__dirname, 'instagram_posts.json');
    const postsData = JSON.parse(await fs.readFile(postsFilePath, 'utf-8'));

    const downloadPromises = postsData.map(async (post) => {
      const localImagePath = await downloadImage(post.image_url);
      return {
        ...post,
        image_url: localImagePath || '/images/placeholder.jpg'
      };
    });

    const postsWithLocalImages = await Promise.all(downloadPromises);
    res.json(postsWithLocalImages);
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;