import { getFloor } from "./puppeteer/index.js";
var floor = await getFloor("mngo");
console.log({ floor: floor });
