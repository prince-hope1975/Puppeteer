import puppeteer, { Browser } from "puppeteer";
import { z } from "zod";

export const getFloor = async (collection: string) => {
  z.string().parse(collection);

  const browser = await puppeteer.launch({
    headless: "new",
    // args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  try {
    const page = await browser.newPage();

    page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
    );
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
    console.log(links.join("\n"));

    await browser.close();
    return [...links];
  } catch (error) {
    console.error(error);
    await browser.close();
    return;
  }
};
export const getFloor_withBrowser = async (browser:Browser,collection: string) => {
  z.string().parse(collection);


  try {
    const page = await browser.newPage();

    page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
    );
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
    console.log(links.join("\n"));

    await browser.close();
    return [...links];
  } catch (error) {
    console.error(error);
    await browser.close();
    return;
  }
};

export const verifyAsset = async (asset: string) => {
  z.string().parse(asset);

  const browser = await puppeteer.launch({
    headless: "new",
  });
  try {
    const page = await browser.newPage();

    page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
    );
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
    await browser.close();
    console.error(error);
    return;
  }
};
