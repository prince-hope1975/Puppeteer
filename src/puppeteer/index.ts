import puppeteer, { Browser } from "puppeteer";
import { z } from "zod";
export async function wait(ms: number, func?: <T>(T?: T) => any) {
  return await new Promise((resolve) =>
    setTimeout(() => {
      func && func(true);
      resolve(null);
    }, ms)
  );
}
export const getFloor = async (collection: string, browser: Browser) => {
  try {
    z.string().parse(collection);

    const page = await browser.newPage();
    console.log("Made new page");
    // await page.setDefaultNavigationTimeout(0);
    await page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
    );
    console.log("Started navigation to page");
    const statue = await page.goto(
      `https://www.nftexplorer.app/collection/${collection}/`,
      {
        // waitUntil: "networkidle0",
        timeout: 120_000,
      }
    );
    const _status = statue?.status();
    if (_status != 404) {
      console.log(`Probably HTTP response status code 200 OK.`);
      //...
    }
    // Type into search box.
    //   await page.type(".devsite-search-field", "Headless Chrom e");
    // console.log(await page.content())

    // Wait for suggest overlay to appear and click "show all results".
    const allResultsSelector = "svg.text-primary";
    // const allResultsSelector = ".display-6";
    // await new Promise((resolve) => setTimeout(resolve, 10000));
    try {
      await page.waitForSelector(allResultsSelector, { timeout: 240_000 });
    } catch (error) {
      console.error(error);
    }
    //   .waitForSelector(allResultsSelector, { timeout: 60000 })
    //   .catch(console.error);
    // await wait(5000);

    const va = await page.$$(allResultsSelector);

    // Extract the results from the page.
    const links =
      (await page.evaluate(() => {
        // @ts-ignore
        return [...document?.querySelectorAll(".display-6")]?.map((anchor) => {
          const title = anchor?.textContent?.split("|")[0].trim();
          console.log({ title });
          return `${title}`;
        });
      }, va)) || [];

    // Print all the files.

    // await browser.close();
    return [...links];
  } catch (error) {
    console.error(error);
    return;
  }
};

export const verifyAsset = async (asset: string) => {
  try {
    z.string().parse(asset);

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
    });

    const page = await browser.newPage();

    page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
    );
    await page.goto(`https://www.nftexplorer.app/asset/${asset}/`, {
      timeout: 0,
    });

    // Type into search box.
    //   await page.type(".devsite-search-field", "Headless Chrom e");
    // console.log(await page.content())

    // Wait for suggest overlay to appear and click "show all results".
    const allResultsSelector = 'div[style="font-size: 1.5rem;"]';
    // const allResultsSelector = ".display-6";
    // await new Promise((resolve) => setTimeout(resolve, 10000));
    await page.waitForSelector(allResultsSelector);
    const elementHandle = await page.$(allResultsSelector);
    const textContent = await page.evaluate(
      (element) => element?.textContent,
      elementHandle
    );
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
  } catch (error) {
    console.error(error);
    return;
  }
};
