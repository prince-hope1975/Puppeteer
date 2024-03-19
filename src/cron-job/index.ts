// import { z } from "zod";
import puppeteer from "puppeteer";
import { db, readDataFromSnapShots_preserve } from "../firebase_admin/index.js";
import {
  findAndKillAllActiveChromeProcesses,
  findAndKillLatestChromeProcess,
  getFloor_withBrowser,
} from "../puppeteer/index.js";
import { parseLocaleNumber } from "../utils/formatter.js";
type keys = Record<string, number>;
export const Func = async () => {
  let browser = await puppeteer.launch({
    headless: "new",
    timeout: 120_000,
  });
  console.log("Launching browser", browser.process()?.pid);
  try {
    const pids = new Set<number>();
    const FLOOR_REF = db.ref(`floorPriceCollection/`);
    const BLACKLIST_REF = db.ref(`blacklist/`);
    const [floor, _blacklist] = await readDataFromSnapShots_preserve(
      FLOOR_REF,
      BLACKLIST_REF
    );

    const allFloors = floor as keys;
    const blacklist = _blacklist as keys;
    if (!allFloors) return;
    if (typeof allFloors === "object") {
      for (const res of pids) {
        await findAndKillLatestChromeProcess(res).catch(() => {
          console.log(`Failed to delete pid ${res}, it may not be active`);
        });
        console.log("closing browser", res);
        pids.delete(res);
      }

      for (const [key, _] of Object.entries(allFloors)) {
        if ((blacklist?.[key] ?? 0) > 3) {
          continue;
        }
        pids.add(browser.process()?.pid as number);

        try {
          console.log("Getting floor", browser.connected, {
            pid: browser.process()?.pid,
          });
          const floor = await getFloor_withBrowser(browser, key);
          console.log("Floor", floor);
          if (!floor) {
            BLACKLIST_REF.child(key)?.set((blacklist?.[key] ?? 0) + 1);
            continue;
          }
          const floor_price = parseLocaleNumber(floor?.floor, "en-US");
          await FLOOR_REF.child(key).set(floor_price);
        } catch (error) {
          BLACKLIST_REF.child(key)?.set((blacklist?.[key] ?? 0) + 1);
          console.error("Failed to set get floor");
        }
      }
    }
    if (browser?.connected) await browser?.close();
  } catch (error) {
    console.error(error);
    if (browser?.connected) await browser?.close();
  } finally {
    if (browser?.connected) await browser?.close();
    findAndKillAllActiveChromeProcesses()
  }
};

setInterval(() => {
  Func();
}, 1000 * 60 * 120);
// Func();
// findAndKillAllActiveChromeProcesses()
// process.on('exit', code => {
//   await import('child_process').then(res=>res.)
// });
// schedule("*/3 * * * *", async () => {
//     Func()
//       .then(() => {
//         console.log({ res: "success" });
//         console.log("Finishing Cron Job");
//       })
//       .catch(console.error);
// });
