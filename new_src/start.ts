import puppeteer, { Browser } from "puppeteer";
const key = process.env.KEY;

export const getFloor = async (browser: Browser) => {
  try {
    const page = await browser.newPage();

    // console.error("Made new page");
    await page.setDefaultNavigationTimeout(0);
    await page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
    );
    // console.log("Started navigation to page");
    const statue = await page.goto(
      `https://www.nftexplorer.app/collection/${key}/`,
      {
        // waitUntil: "networkidle0",
        timeout: 240_000,
      }
    );
    const _status = statue?.status();
    if (_status != 404) {
      // console.error(`Probably HTTP response status code 200 OK.`);
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
      await page.waitForSelector(allResultsSelector, { timeout: 0 });
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
        const docs = document?.querySelectorAll(".display-6");
        // console.log({ docs });
        // @ts-ignore
        return [...(docs || [])]?.map((anchor) => {
          const title = anchor?.textContent?.split("|")[0].trim();
          // console.log({ title });
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

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    // args: ["--disable-setuid-sandbox"],
  });
  const floor = await getFloor(browser);
  console.log({ floor });
  process.stdout.write(floor?.join("/") || "");
  // process.exit(0);
  // process.exit
  return;
  
})();
// process.exit(0);
