import puppeteer from "puppeteer";
import { z } from "zod";
import { exec as _exec } from "child_process";
import { promisify } from "util";
const exec = promisify(_exec);
/**
 * Retrieves and parses data from a website for a given collection.
 *
 * @param {string} collection - The name of the collection to retrieve data for.
 * @return {Array<string>} An array of links extracted from the webpage.
 */
export const getFloor = async (collection) => {
    z.string().parse(collection);
    const browser = await puppeteer.launch({
        headless: "new",
        // args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    try {
        const page = await browser.newPage();
        page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36");
        console.log({ collection });
        await page.goto(`https://www.nftexplorer.app/collection/${collection}/`);
        // Type into search box.
        //   await page.type(".devsite-search-field", "Headless Chrom e");
        // console.log(await page.content())
        // Wait for suggest overlay to appear and click "show all results".
        const allResultsSelector = "svg.text-primary";
        // const allResultsSelector = ".display-6";
        // await new Promise((resolve) => setTimeout(resolve, 10000));
        await page.waitForSelector(allResultsSelector);
        const va = await page.$$(allResultsSelector);
        // Extract the results from the page.
        const links = (await page.evaluate(() => {
            // @ts-ignore
            return [...document?.querySelectorAll(".display-6")]?.map((anchor) => {
                const title = anchor?.textContent?.split("|")[0].trim();
                console.log({ title });
                return `${title}`;
            });
        }, va)) || [];
        // Print all the files.
        console.log(links.join("\n"));
        await browser.close();
        return [...links];
    }
    catch (error) {
        console.error(error);
        await browser.close();
        return;
    }
};
/**
 * Retrieves the floor price for a given collection using a provided browser.
 *
 * @param {Browser} browser - The browser to use for web scraping.
 * @param {string} collection - The name of the collection to fetch the floor price for.
 * @return {Promise<{ links: string[]; floor: string | null }>} An object containing the links and floor price information.
 */
export const getFloor_withBrowser = async (browser, collection) => {
    z.string().parse(collection);
    let page = undefined;
    try {
        page = await browser.newPage();
        page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36");
        await page.goto(`https://www.asalytic.app/collection/${collection}?tab=market&traitTypes=&traitValues=&filterTypes=&filterValues=`, {
            timeout: 120_000,
        });
        // Wait for the page to load
        await page.waitForSelector(".mt-4.md\\:mt-0.grid.grid-cols-3.md\\:flex.gap-4.md\\:gap-10", { timeout: 120_000 });
        await new Promise((resolve) => setTimeout(resolve, 5_000));
        // Extract the floor price
        const floorPrice = await page.evaluate(() => {
            const floorPriceElement = document
                .querySelectorAll(".mt-4.md\\:mt-0.grid.grid-cols-3.md\\:flex.gap-4.md\\:gap-10 > div")[1]
                .querySelector("p.text-white");
            const floorPriceText = floorPriceElement
                ? floorPriceElement.textContent?.trim()
                : null;
            return floorPriceText ? floorPriceText.replace(" ALGO", "") : null;
        });
        if (page != undefined)
            await page?.close();
        return { links: [floorPrice], floor: floorPrice };
    }
    catch (error) {
        console.log("Failed to fetch floor");
        console.error(error);
        if (page != undefined)
            await page?.close();
        return;
        // await findAndKillAllActiveChromeProcesses().catch(console.error);
    }
};
export const verifyAsset = async (asset) => {
    z.string().parse(asset);
    const browser = await puppeteer.launch({
        headless: "new",
    });
    try {
        const page = await browser.newPage();
        page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36");
        await page.goto(`https://www.nftexplorer.app/asset/${asset}/`);
        // Type into search box.
        //   await page.type(".devsite-search-field", "Headless Chrom e");
        // console.log(await page.content())
        // Wait for suggest overlay to appear and click "show all results".
        const allResultsSelector = 'div[style="font-size: 1.5rem;"]';
        // const allResultsSelector = ".display-6";
        // await new Promise((resolve) => setTimeout(resolve, 10000));
        await page.waitForSelector(allResultsSelector);
        const elementHandle = await page.$(allResultsSelector);
        const textContent = await page.evaluate((element) => element?.textContent, elementHandle);
        // Extract the results from the page.
        // const links =
        //   (await page.evaluate(() => {
        //     // @ts-ignore
        //     return [...document?.querySelectorAll(".display-6")]?.map((anchor) => {
        //       const title = anchor?.textContent?.split("|")[0].trim();
        //       return `${title}`;
        //     });
        //   }, va)) || [];
        // Print all the files.
        // console.log(links.join("\n"));
        await browser.close();
        console.log({ textContent });
        return textContent;
    }
    catch (error) {
        await browser.close();
        console.error(error);
        return;
    }
};
export async function findAndKillLatestChromeProcess(pid) {
    try {
        // Use shell commands to find the latest Chrome process
        const cmd = "pgrep -o 'chrome|chromium'";
        const ret = await exec(cmd);
        const latestChromePID = pid || ret.stdout.trim();
        if (latestChromePID) {
            console.log(`Terminating the latest Chrome process with PID ${latestChromePID}`);
            await exec(`kill -9 ${latestChromePID}`);
        }
        else {
            console.log("No Chrome processes found.");
            if (pid) {
                await exec(`kill -9 ${ret.stdout.trim().split("\n")}`);
            }
        }
    }
    catch (error) {
        if (error) {
            console.error(`Error finding Chrome process: ${error?.message}`);
            return;
        }
    }
}
export async function findAndKillAllActiveChromeProcesses() {
    // Use shell commands to find all active Chrome processes
    const cmd = "pgrep 'chrome|chromium'";
    try {
        const ret = await exec(cmd);
        const chromePIDs = ret.stdout.trim().split("\n");
        if (chromePIDs.length > 0) {
            console.log(`Terminating ${chromePIDs.length} active Chrome processes:`);
            for (let pid of chromePIDs) {
                await exec(`kill -9 ${pid}`).catch((killError) => {
                    if (killError) {
                        console.error(`Error killing Chrome process ${pid}: ${killError.message}`);
                    }
                });
            }
        }
        else {
            console.log("No active Chrome processes found.");
        }
    }
    catch (error) {
        if (error) {
            console.error(`Error finding Chrome processes: ${error.message}`);
            return;
        }
    }
}
