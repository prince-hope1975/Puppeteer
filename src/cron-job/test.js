// @ts-check
import puppeteer from "puppeteer";
import { getFloor } from "../puppeteer/index.js";

const browser = await puppeteer.launch({
  headless: "new",
  //   headless: true,
  //   executablePath: "/usr/bin/chromium-browser",
});
const floor = await getFloor("algoatspfp", browser);
console.log({ floor });
process.exit();
