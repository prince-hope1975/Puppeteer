// @ts-check
import puppeteer from "puppeteer";
import { getFloor } from "../puppeteer/index.js";

const browser = await puppeteer.launch({ headless: false ,});
const floor = await getFloor("algoatspfp", browser);
console.log({ floor });
process.exit()
