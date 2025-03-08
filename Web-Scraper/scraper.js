require("dotenv").config();
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const { executablePath } = require("puppeteer");
puppeteer.use(StealthPlugin());

const Scraper = async () => {
  const browser = await puppeteer.launch({
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

  const page = await browser.newPage();
  await page.setViewport({
    width: 1280,
    height: 720,
    deviceScaleFactor: 1,
  });

  await page.goto(`https://www.sololearn.com/Play/JavaScript`);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  await page.screenshot({ path: "screenshot.png" });

  await browser.close();
  console.log("Browser closed.");

  server.close(() => {
    console.log("Server shut down.");
  });
};
