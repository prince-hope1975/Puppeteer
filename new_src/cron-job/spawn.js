import { spawn } from "child_process";
// const exec = util.promisify(_exec);
const envVariables = {
    KEY: "algoatspfp", // Example variable
};
const envVariableArgs = Object.keys(envVariables)
    .map((key) => `-e ${key}=${envVariables["KEY"]}`)
    .join(" ");
const command = `run -i --init --cap-add=SYS_ADMIN --rm ${envVariableArgs} ghcr.io/puppeteer/puppeteer:latest node -e`;
const ls = spawn("docker", [...command.split(" "), `"$(cat src/start.js)"`]);
ls.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});
ls.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
});
ls.on("error", (error) => {
    console.log(`error: ${error.message}`);
});
ls.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
});
// (async () => {
//   const
//   // const { stderr, stdout } = await exec(command);
//   console.log({ stderr, stdout });
// })();
