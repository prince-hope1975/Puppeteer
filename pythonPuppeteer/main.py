import asyncio
from pyppeteer import launch

async def scrape_data():
    d={
          "executablePath": "/bin/chromium-browser",
    }
    browser = await launch(d)

    page = await browser.newPage()
    await page.goto('https://www.nftexplorer.app/collection/algoatspfp',{ "timeout": 120_000 })
    allResultsSelector = "svg.text-primary"
    await page.waitForSelector(allResultsSelector, { "timeout": 120_000 })



    dates = await page.evaluate('''() => {
        return Array.from(document.querySelectorAll('.display-6')).map(elem => elem.innerText);
    }''')

    await browser.close()
    return titles, links, dates



data = asyncio.get_event_loop().run_until_complete(scrape_data())
print(data)