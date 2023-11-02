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
            console.log({ key });
            let browser = await puppeteer
                .launch({
                headless: "new",
                timeout: 120_000,
            })
                .catch(console.error);
            if (!browser) {
                browser = await puppeteer.launch({
                    headless: "new",
                    timeout: 120_000,
                });
            }
            // browser
            console.log({ key });
            try {
                console.log("Fetching");
                const floor = await getFloor_withBrowser(browser, key);
                console.log("Fetched");
                const floor_price = parseLocaleNumber(floor?.at(1), "en-US");
                await FLOOR_REF.child(key).set(floor_price);
            }
            catch (error) {
                console.log("Launching new browser");
                const browser = await puppeteer.launch({
                    headless: "new",
                    timeout: 120_000,
                });
                try {
                    const floor = await getFloor_withBrowser(browser, key);
                    const floor_price = parseLocaleNumber(floor?.at(1), "en-US");
                    await FLOOR_REF.child(key).set(floor_price);
                }
                catch (error) {
                    console.log("continuing 1");
                    findAndKillLatestChromeProcess(browser.process()?.pid);
                    console.error(error);
                    continue;
                }
                findAndKillLatestChromeProcess(browser.process()?.pid);
                console.log("continuing 1");
                continue;
            }
            console.log("continuing 2");
            findAndKillLatestChromeProcess(browser.process()?.pid);
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
    .catch(async (err) => {
    console.error(err);
    await Func().catch(() => { });
});
// });
// schedule("*/3 * * * *", async () => {
//     Func()
//       .then(() => {
//         console.log({ res: "success" });
//         console.log("Finishing Cron Job");
//       })
//       .catch(console.error);
// });
