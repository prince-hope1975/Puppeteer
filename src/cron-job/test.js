// @ts-check
import { launch } from "puppeteer";
// import { getFloor } from "../puppeteer/index.js";
import { getFloor } from "../puppeteer/index.js";

(async () => {
  const browser = await launch({
    headless: "new",
    executablePath: "/bin/chromium-browser",
    args: ["--disable-setuid-sandbox"],
    ignoreHTTPSErrors: true,
  });
  console.log("Browser launched");
  const floor = await getFloor("algoatspfp", browser);
  console.log({ floor });
  process.exit();
})();


