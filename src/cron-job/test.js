// @ts-check
import { launch } from "puppeteer";
// import { getFloor } from "../puppeteer/index.js";
import { getFloor } from "../puppeteer/index.js";

(async () => {
  const browser = await launch({
    headless: true,
    executablePath: "/bin/chromium-browser",
  });
  console.log("Browser launched");
  const floor = await getFloor("algogods", browser);
  console.log({ floor });
  process.exit();
})();
