import { writeFile } from "fs";
import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.goto("https://www.nftexplorer.app/collection/algoatspfp");

  page.on("load",async ()=>{
    console.log("page loaded")
  })
//   await page.goto("https://developers.google.com/web/");
await new Promise((resolve)=>setTimeout(resolve,10000))
  // Type into search box.
//   await page.type(".devsite-search-field", "Headless Chrome");
  // console.log(await page.content())

  // Wait for suggest overlay to appear and click "show all results".
  const allResultsSelector = ".display-6";
  // await page.waitForSelector(allResultsSelector);
  const va = await page.$$(allResultsSelector)
  writeFile("index.html", await page.content(), (err) => {
    if (err) {
      console.error(err);
      return;
    }}
    //file written successfully
  )
  console.log({va})
  // Wait for the results page to load and display the results.


  // Extract the results from the page.
  const links = await page.evaluate((resultsSelector) => {
    return [...document.querySelectorAll(".display-6")].map((anchor) => {
    
      const title = anchor?.textContent?.split("|")[0].trim();
      return `${title}`;
    });
  }, va);
  

  // Print all the files.
  console.log(links.join("\n"));

  await browser.close();
})();
