import { getFloor } from "./puppeteer/index.js";

const floor = await getFloor("mngo");
console.log({ floor });
