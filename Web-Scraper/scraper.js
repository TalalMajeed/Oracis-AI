require("dotenv").config();
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const { executablePath } = require("puppeteer");
puppeteer.use(StealthPlugin());

const MAX_RETRIES = 5;

const Scraper = async (linkedinUrl) => {
  if (!linkedinUrl) {
    throw new Error("LinkedIn URL is required");
  }

  let retryCount = 0;
  let browser;
  let page;

  while (retryCount < MAX_RETRIES) {
    try {
      browser = await puppeteer.launch({
        headless: false,
        executablePath: executablePath(),
        args: [
          "--incognito",
          "--disable-features=IsolateOrigins,site-per-process",
          "--disable-infobars",
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--use-gl=angle",
          "--use-angle=gl",
          "--enable-unsafe-webgpu",
          "--disable-setuid-sandbox",
          "--use-fake-device-for-media-stream",
          "--window-size=1280,900",
        ],
        defaultViewport: null,
      });

      page = await browser.newPage();
      await page.setViewport({
        width: 1280,
        height: 720,
        deviceScaleFactor: 1,
      });

      // Set user agent to look more like a real browser
      await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      );

      await page.goto(linkedinUrl, { waitUntil: "networkidle0" });

      // Check if we're on a login page
      const isLoginPage = await page.evaluate(() => {
        return document.querySelector('form[action*="login"]') !== null;
      });

      if (isLoginPage) {
        console.log(
          `Login page detected. Attempt ${retryCount + 1} of ${MAX_RETRIES}`
        );
        await browser.close();
        retryCount++;
        continue;
      }

      // Wait for content to load
      await page.waitForSelector("body", { timeout: 5000 });

      // Get the page content
      const content = await page.evaluate(() => {
        return document.documentElement.outerHTML;
      });

      // Clean the data
      const cleanedData = cleanLinkedInData(content);

      await browser.close();
      return cleanedData;
    } catch (error) {
      console.error(`Error during scraping attempt ${retryCount + 1}:`, error);
      if (browser) {
        await browser.close();
      }
      retryCount++;
    }
  }

  // If we've exhausted all retries, return empty data
  console.log("Max retries reached. Returning empty data.");
  return null;
};

// Helper function to clean LinkedIn data
const cleanLinkedInData = (html) => {
  // Remove scripts
  html = html.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ""
  );

  // Remove styles
  html = html.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");

  // Remove comments
  html = html.replace(/<!--[\s\S]*?-->/g, "");

  // Remove extra whitespace
  html = html.replace(/\s+/g, " ").trim();

  return html;
};

module.exports = Scraper;
