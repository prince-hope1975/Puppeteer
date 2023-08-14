// @ts-check
import puppeteer from "puppeteer";
import { getFloor } from "../puppeteer/index.js";

const browser = await puppeteer.launch({
  headless: true,
//   executablePath: "/bin/chromium-browser",
});
console.log("Browser launched");
const floor = await getFloor("algogods", browser);
console.log({ floor });
process.exit();
