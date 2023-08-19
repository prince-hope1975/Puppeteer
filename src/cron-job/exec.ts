import util from "node:util";
import { exec as _exec } from "child_process";
const exec = util.promisify(_exec);

const envVariables = {
  KEY: "algoatspfp", // Example variable
};

const envVariableArgs = Object.keys(envVariables)
  .map((key) => `-e ${key}=${envVariables["KEY"]}`)
  .join(" ");

const command = `docker run -i --init --cap-add=SYS_ADMIN --rm ${envVariableArgs} ghcr.io/puppeteer/puppeteer:latest node -e "$(cat src/start.js)"`;

(async () => {
  const { stderr, stdout } = await exec(command);
  console.log({ stderr, stdout });
})();
