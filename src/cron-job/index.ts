// import { z } from "zod";
import puppeteer from "puppeteer";
import { db, readDataFromSnapShots_preserve } from "../firebase_admin/index.js";
import util from "node:util";
import { exec as _exec } from "child_process";
const exec = util.promisify(_exec);
import { parseLocaleNumber } from "../utils/formatter.js";
// @ts-ignore
import { schedule } from "node-cron";

const Func = async () => {
  const FLOOR_REF = db.ref(`floorPriceCollection/`);
  const [_floor] = await readDataFromSnapShots_preserve(FLOOR_REF);
  if (!_floor) return;
  if (typeof _floor === "object") {
    console.log("Started process")
    for (const key in _floor) {
      try {
        const envVariables = {
          KEY: key, // Example variable
        };
        const envVariableArgs = Object.keys(envVariables)
          .map((key) => `-e ${key}=${envVariables["KEY"]}`)
          .join(" ");

        const command = `docker run -i --init --cap-add=SYS_ADMIN --rm ${envVariableArgs} ghcr.io/puppeteer/puppeteer:latest node -e "$(cat src/start.js)"`;
        const { stderr, stdout } = await exec(command);
        console.log({ stderr, stdout });
        const floor = stderr.split(",");
        const floor_price = parseLocaleNumber(floor?.at(1)!, "en-US");
        await FLOOR_REF.child(key).set(floor_price);
      } catch (e) {
        console.error(e);
      }
    }
  }
};

// schedule("*/2 * * * *", async () => {
//   await Func()
//     .then(() => {
//       console.log({ res: "success" });
//       console.log("Finishing Cron Job");
//     })
//     .catch(console.error);
// });
schedule("40 */24 * * *", () => {
  Func()
    .then(() => {
      console.log({ res: "success" });
      console.log("Finishing Cron Job");
    })
    .catch(console.error);
});
