// import { z } from "zod";
import puppeteer from "puppeteer";
import { db, readDataFromSnapShots_preserve } from "../firebase_admin/index.js";
import { getFloor } from "../puppeteer/index.js";
import { parseLocaleNumber } from "../utils/formatter.js";
// @ts-ignore
import { schedule } from "node-cron";
const Func = async () => {
    const FLOOR_REF = db.ref(`floorPriceCollection/`);
    const [_floor] = await readDataFromSnapShots_preserve(FLOOR_REF);
    if (!_floor)
        return;
    if (typeof _floor === "object") {
        console.log({ _floor });
        console.time("start");
        const browser = await puppeteer.launch();
        console.timeEnd("start");
        console.log("Launched browser ", browser);
        for (const key in _floor) {
            try {
                const floor = await getFloor(key, browser);
                const floor_price = parseLocaleNumber(floor?.at(1), "en-US");
                await FLOOR_REF.child(key).set(floor_price);
            }
            catch (e) {
                console.error(e);
            }
        }
        browser.close();
    }
};
schedule("*/2 * * * *", async () => {
    await Func()
        .then(() => {
        console.log({ res: "success" });
        console.log("Finishing Cron Job");
    })
        .catch(console.error);
});
// schedule("40 */24 * * *", () => {
//   Func()
//     .then(() => {
//       console.log({ res: "success" });
//       console.log("Finishing Cron Job");
//     })
//     .catch(console.error);
// });
