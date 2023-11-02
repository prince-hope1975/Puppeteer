// import { z } from "zod";
import puppeteer from "puppeteer";
import { db, readDataFromSnapShots_preserve } from "../firebase_admin/index.js";
import { findAndKillLatestChromeProcess, getFloor_withBrowser, } from "../puppeteer/index.js";
import { parseLocaleNumber } from "../utils/formatter.js";
export const Func = async () => {
    const FLOOR_REF = db.ref(`floorPriceCollection/`);
    const [_floor] = await readDataFromSnapShots_preserve(FLOOR_REF);
    if (!_floor)
        return;
    if (typeof _floor === "object") {
        for (const key in _floor) {
            const browser = await puppeteer.launch({
                headless: "new",
                timeout: 120_000,
            });
            // browser
            console.log({ key });
            try {
                const floor = await getFloor_withBrowser(browser, key);
                const floor_price = parseLocaleNumber(floor?.at(1), "en-US");
                await FLOOR_REF.child(key).set(floor_price);
            }
            catch (error) {
                console.error(error);
                findAndKillLatestChromeProcess();
            }
            browser?.close().catch(console.error);
        }
    }
};
// Func().then(() => {
//   console.log("Done");
// });
// schedule("* */1 * * *", () => {
Func()
    .then(() => {
    console.log({ res: "success" });
    console.log("Finishing Cron Job");
})
    .catch(console.error);
// });
// schedule("*/3 * * * *", async () => {
//     Func()
//       .then(() => {
//         console.log({ res: "success" });
//         console.log("Finishing Cron Job");
//       })
//       .catch(console.error);
// });
