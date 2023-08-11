// @ts-check
import puppeteer from "puppeteer";
import { getFloor } from "../puppeteer/index.js";

const browser = await puppeteer.launch({
  headless: true,
  //   headless: true,
  //   executablePath: "/usr/bin/chromium-browser",
});
const floor = await getFloor("algogods", browser);
console.log({ floor });
process.exit();
