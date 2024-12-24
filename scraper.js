const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');

// User agents list
const userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0"
];

async function setupBrowser() {
    // Launch puppeteer with options
    const browser = await puppeteer.launch({
        headless: 'new',
        args: [
            '--no-sandbox',
            '--disable-dev-shm-usage',
            // Uncomment and modify to use proxy
            // '--proxy-server=172.87.152.122:39593'
        ]
    });

    const page = await browser.newPage();
    
    // Set random user agent
    const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
    await page.setUserAgent(randomUserAgent);

    return { browser, page };
}

async function createImagesDirectory() {
    try {
        await fs.mkdir('images', { recursive: true });
    } catch (error) {
        console.error('Error creating images directory:', error);
    }
}

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time);
    });
}

async function scrapeInstagramPosts(profileUrl) {
    const { browser, page } = await setupBrowser();
    const postData = [];

    try {
        await createImagesDirectory();

        // Navigate to the Instagram profile
        await page.goto(profileUrl);
        await delay(3000);  // Using custom delay function instead

        // Scroll to load more content
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await delay(3000);  // Using custom delay function instead

        // Get first 5 post URLs
        const postUrls = await page.evaluate(() => {
            const links = Array.from(document.querySelectorAll('a[href*="/p/"]'));
            return links.slice(0, 5).map(link => link.href);
        });

        // Visit each post and extract data
        for (const postUrl of postUrls) {
            await page.goto(postUrl);
            await delay(2000);  // Using custom delay function instead

            let imgUrl = null;
            let captionText = null;

            try {
                // Extract image URL
                const imgElement = await page.$('div._aagv img.x5yr21d');
                if (imgElement) {
                    imgUrl = await page.evaluate(el => el.src, imgElement);
                }

                // Extract caption
                const captionElement = await page.$('h1._ap3a._aaco._aacu._aacx._aad7._aade');
                if (captionElement) {
                    captionText = await page.evaluate(el => el.textContent, captionElement);
                }

                // Uncomment to save images locally
                /*
                if (imgUrl) {
                    const response = await axios.get(imgUrl, { responseType: 'arraybuffer' });
                    const imgName = path.join('images', imgUrl.split('/').pop().split('?')[0]);
                    await fs.writeFile(imgName, response.data);
                    console.log(`Image saved as ${imgName}`);
                }
                */

                postData.push({
                    post_url: postUrl,
                    image_url: imgUrl,
                    // image_path: imgUrl ? imgName : null,
                    caption: captionText
                });

            } catch (error) {
                console.error(`Error processing post ${postUrl}:`, error);
            }
        }

        // Save data to JSON file
        const jsonData = JSON.stringify(postData, null, 4);
        await fs.writeFile('instagram_posts.json', jsonData);
        console.log(jsonData);

    } catch (error) {
        console.error('Error during scraping:', error);
    } finally {
        await browser.close();
    }
}

// Run the scraper
const targetProfile = 'https://www.instagram.com/ecellmsit/';
scrapeInstagramPosts(targetProfile);