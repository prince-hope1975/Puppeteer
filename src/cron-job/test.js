// @ts-check
import puppeteer from "puppeteer";
import { getFloor } from "../puppeteer";

const browser = await puppeteer.launch();
const floor = await getFloor("algoatspfp", browser);
console.log({ floor });
