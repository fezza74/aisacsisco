import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixtures";

let browser : Browser
let page : Page
let context : BrowserContext

BeforeAll(async () => {
    browser = await chromium.launch({ headless: true })
})

Before(async () => {
    context = await browser.newContext()
    page = await browser.newPage()
    pageFixture.page = page
})

After(async function ({pickle, result}) {
    if(result?.status === Status.FAILED){
        const image = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}.png`, type: 'png' })
        await this.attach(image, "image/png")
    }
    page.close()
    context.close()    
})

AfterAll(async () => {
    browser.close()
})