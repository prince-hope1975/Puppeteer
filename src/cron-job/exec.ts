import util from "node:util";
import { exec as _exec } from "child_process";
// const exec = util.promisify(_exec);


// (async () => {
//   const { stderr, stdout } = await exec(command);
//   console.log({ stderr, stdout });
// })();

export const execGetFloor = async (
  _floor = "algoatspfp"
): Promise<{ stderr: string; stdout: string }> => {
  const envVariables = {
    KEY: _floor || "algoatspfp", // Example variable
  };
  const envVariableArgs = Object.keys(envVariables)
    .map((key) => `-e ${key}=${envVariables["KEY"]}`)
    .join(" ");

  const command = `docker run -i --init --cap-add=SYS_ADMIN --rm ${envVariableArgs} ghcr.io/puppeteer/puppeteer:latest node -e "$(cat src/start.js)"`;

  return await new Promise((resolve, reject) => {
    _exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        reject(error);
        return;
      }

      resolve({ stderr, stdout });
      return { stderr, stdout };
    });
  });
};

(async () => {
  const val = await execGetFloor();
  console.log({ val });
  // const { stderr, stdout } = await exec(command);
  // console.log({ stderr, stdout });
})();
