import { Page, Locator, expect } from "@playwright/test"
import BasePage from "./BasePage";

export class HomePage extends BasePage {
    readonly page           : Page
    readonly emailAddress   : Locator
    readonly phoneNumber    : Locator

    constructor(page: Page) {
        super(page)
        this.page           = page
        this.emailAddress   = page.locator('//*[@id="ut-ctc-247"]/div/div/div/dl/dd[1]')
        this.phoneNumber    = page.locator('//*[@id="ut-ctc-247"]/div/div/div/dl/dd[2]')
    }

    async checkEmailAddressIsVisible(email : string) {
        await this.waitForElementVisible(this.emailAddress)
        const emailText =  await this.emailAddress.innerText()
        expect(email).toBe(emailText)
    }

    async checkPhoneNumberIsVisible(phone : string) {
        await this.waitForElementVisible(this.phoneNumber)
        const phoneText = await this.phoneNumber.innerText()
        expect(phone).toBe(phoneText)
    }
}