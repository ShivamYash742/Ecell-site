from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import time
import json
import os
import requests
import random

# Setup the webdriver with headless option and proxy
options = Options()
options.add_argument('--headless')  # Runs Chrome in headless mode (no UI)
options.add_argument('--no-sandbox')  # Use this flag when running in Docker or other environments
options.add_argument('--disable-dev-shm-usage')  # Required for some environments, especially in Docker

# # Set the proxy (replace with your proxy details)
# proxy = "172.87.152.122:39593"
# options.add_argument(f'--proxy-server={proxy}')
 
user_agents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36",
    "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0"
    # Add more user agents here
]

random_user_agent = random.choice(user_agents)
options.add_argument(f"user-agent={random_user_agent}")

# Setup the ChromeDriver using ChromeDriverManager
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# Create directory for saving images if it doesn't exist
if not os.path.exists('images'):
    os.makedirs('images')

# Go to the Instagram public profile
url = 'https://www.instagram.com/ecellmsit/'  # Replace with the target Instagram profile URL
driver.get(url)

# Wait for the page to load (adjust sleep time if needed)
time.sleep(3)

# Scroll to the bottom to ensure posts load dynamically
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
time.sleep(3)

# Get the first 5 posts (use XPATH to find links to individual posts)
posts = driver.find_elements(By.XPATH, '//a[contains(@href, "/p/")]')
post_urls = [post.get_attribute('href') for post in posts[:5]]  # Extract the first 5 post URLs

# List to store post data in JSON format
post_data = []

# Output the URLs of the top 5 posts and extract their images and captions
for post_url in post_urls:
    # Visit each post URL
    driver.get(post_url)
    time.sleep(2)  # Allow time for the post page to load

    # Extract the image URL
    try:
        # The image tag might be different, so adjusting to extract 'src' from the proper image element
        img_element = driver.find_element(By.XPATH, '//div[@class="_aagv"]//img[@class="x5yr21d xu96u03 x10l6tqk x13vifvy x87ps6o xh8yej3"]') # New class or adjust if needed
        img_url = img_element.get_attribute('src')
    except Exception as e:
        img_url = None
        print(f"Error extracting image for post {post_url}: {e}")

    # Extract the caption (new XPath)
    try:
        caption_element = driver.find_element(By.XPATH, '//h1[contains(@class, "_ap3a _aaco _aacu _aacx _aad7 _aade")]')  # More reliable caption location
        caption_text = caption_element.text
    except Exception as e:
        caption_text = None
        print(f"Error extracting caption for post {post_url}: {e}")

    # # Save image to local file
    # if img_url:
    #     try:
    #         # Get image content
    #         img_data = requests.get(img_url).content
    #         # Extract image name from URL (e.g., 'image.jpg')
    #         img_name = os.path.join('images', img_url.split('/')[-1].split('?')[0])  # Ensure no query params
    #         # Save image
    #         with open(img_name, 'wb') as f:
    #             f.write(img_data)
    #         print(f"Image saved as {img_name}")
    #     except Exception as e:
    #         print(f"Error saving image for post {post_url}: {e}")

    # Store the data in a dictionary (with image path instead of URL)
    post_details = {
        'post_url': post_url,
        'image_url':img_url if img_url else None,
        # 'image_path': img_name if img_url else None,
        'caption': caption_text
    }

    # Add the post data to the list
    post_data.append(post_details)

# Convert the list of post data into JSON format
json_data = json.dumps(post_data, indent=4)

# Print the JSON data to the console (optional)
print(json_data)

# Save the JSON data to a file
with open('instagram_posts.json', 'w') as json_file:
    json_file.write(json_data)

# Close the browser
driver.quit()
