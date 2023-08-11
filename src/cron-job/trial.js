import puppeteer from "puppeteer";
(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    console.log("Made new page");
    // await page.setDefaultNavigationTimeout(0);
    await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36");
    console.log("Started navigation to page");
    const statue = await page.goto(`https://google.com`, {
        waitUntil: "networkidle0",
        timeout: 60000,
    });
    //   https://www.nftexplorer.app/collection/algoatspfp
    const content = await page.content();
    const _status = statue?.status();
    if (_status != 404) {
        console.log(`Probably HTTP response status code 200 OK.`);
        console.log({ content });
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
        await page.waitForSelector(allResultsSelector, { timeout: 60000 });
    }
    catch (error) {
        console.error(error);
    }
    //   .waitForSelector(allResultsSelector, { timeout: 60000 })
    //   .catch(console.error);
    // await wait(5000);
    const _Va = await page.$eval("body", (res) => {
        console.log(res);
        return res;
    });
    const va = await page.$$(allResultsSelector);
    console.log({ _Va });
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
    // await browser.close();
    return [...links];
})();
