import { Locator, Page } from "@playwright/test"

export default class BasePage {
    readonly page: Page

    constructor(page : Page){
        this.page = page
    }

    async navigateTo(url : string) {
        await this.page.goto(url)
    }

    async clickElement(element : Locator) {
        await element.click()
    }

    async fillFormField(element : Locator, value : string) {
        await element.fill(value)
    }

    async getElemnetText(element : Locator): Promise<string> {
        return element.innerText()
    }

    async waitForElementVisible(selector : Locator | string) {
        if (typeof selector === 'string') {
            await this.page.waitForSelector(selector, { state : 'visible' })
        } else {
            await selector.waitFor({ state : 'visible' })
        }
    }

    async waitForElementHidden(selector : Locator | string) {
        if (typeof selector === 'string'){
            await this.page.waitForSelector(selector, { state : 'hidden' })
        } else {
            await selector.waitFor({ state : 'hidden' })
        }
    }
    
    // async takeScreenshot(fileName : string) {
    //     await this.page.screenshot({ path : fileName })
    // }

    async closePage() {
        await this.page.close()
    }
}