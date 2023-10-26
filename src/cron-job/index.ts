// import { z } from "zod";
import { db, readDataFromSnapShots_preserve } from "../firebase_admin/index.js";
import { getFloor } from "../puppeteer/index.js";
import { parseLocaleNumber } from "../utils/formatter.js";
// @ts-ignore
import { schedule } from "node-cron";

export const Func = async () => {
  const FLOOR_REF = db.ref(`floorPriceCollection/`);
  const [_floor] = await readDataFromSnapShots_preserve(FLOOR_REF);
  if (!_floor) return;
  if (typeof _floor === "object") {
    for (const key in _floor) {
      console.log({ _floor, key });
      const floor = await getFloor(key);
      const floor_price = parseLocaleNumber(floor?.at(1), "en-US");
      await FLOOR_REF.child(key).set(floor_price);
    }
  }
};

// Func().then(() => {
//   console.log("Done");
// });

schedule("40 */23 * * *", () => {
  Func()
    .then(() => {
      console.log({ res: "success" });
      console.log("Finishing Cron Job");
    })
    .catch(console.error);
});
// schedule("*/3 * * * *", async () => {
//     Func()
//       .then(() => {
//         console.log({ res: "success" });
//         console.log("Finishing Cron Job");
//       })
//       .catch(console.error);
// });
