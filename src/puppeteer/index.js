var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import puppeteer from "puppeteer";
import { z } from "zod";
export function wait(ms, func) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve) => setTimeout(() => {
            func && func(true);
            resolve(null);
        }, ms));
    });
}
export const getFloor = (collection, browser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        z.string().parse(collection);
        const page = yield browser.newPage();
        console.log("Made new page");
        // await page.setDefaultNavigationTimeout(0);
        yield page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36");
        console.log("Started navigation to page");
        const statue = yield page.goto(`https://www.nftexplorer.app/collection/${collection}/`, {
            // waitUntil: "networkidle0",
            timeout: 240000,
        });
        const _status = statue === null || statue === void 0 ? void 0 : statue.status();
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
            yield page.waitForSelector(allResultsSelector, { timeout: 240000 });
        }
        catch (error) {
            console.error(error);
        }
        //   .waitForSelector(allResultsSelector, { timeout: 60000 })
        //   .catch(console.error);
        // await wait(5000);
        const va = yield page.$$(allResultsSelector);
        // Extract the results from the page.
        const links = (yield page.evaluate(() => {
            var _a;
            const docs = document === null || document === void 0 ? void 0 : document.querySelectorAll(".display-6");
            console.log({ docs });
            // @ts-ignore
            return (_a = [...(docs || [])]) === null || _a === void 0 ? void 0 : _a.map((anchor) => {
                var _a;
                const title = (_a = anchor === null || anchor === void 0 ? void 0 : anchor.textContent) === null || _a === void 0 ? void 0 : _a.split("|")[0].trim();
                console.log({ title });
                return `${title}`;
            });
        }, va)) || [];
        // Print all the files.
        // await browser.close();
        return [...links];
    }
    catch (error) {
        console.error(error);
        return;
    }
});
export const verifyAsset = (asset) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        z.string().parse(asset);
        const browser = yield puppeteer.launch({
            headless: true,
            args: ["--no-sandbox"],
        });
        const page = yield browser.newPage();
        page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36");
        yield page.goto(`https://www.nftexplorer.app/asset/${asset}/`, {
            timeout: 0,
        });
        // Type into search box.
        //   await page.type(".devsite-search-field", "Headless Chrom e");
        // console.log(await page.content())
        // Wait for suggest overlay to appear and click "show all results".
        const allResultsSelector = 'div[style="font-size: 1.5rem;"]';
        // const allResultsSelector = ".display-6";
        // await new Promise((resolve) => setTimeout(resolve, 10000));
        yield page.waitForSelector(allResultsSelector);
        const elementHandle = yield page.$(allResultsSelector);
        const textContent = yield page.evaluate((element) => element === null || element === void 0 ? void 0 : element.textContent, elementHandle);
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
        yield browser.close();
        console.log({ textContent });
        return textContent;
    }
    catch (error) {
        console.error(error);
        return;
    }
});
