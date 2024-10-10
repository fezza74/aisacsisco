import { Given, When, Then } from "@cucumber/cucumber"
import { pageFixture } from "../hooks/pageFixtures";
import { HomePage } from "../../pages/HomePage";

let homePage : HomePage

Given('Acceding on home page', async () => {
     homePage = new HomePage(pageFixture.page)
     await homePage.navigateTo('https://www.aisacsisco.eu')
});
Then('Get header {string} and {string} element', async(email, phone) => {
     await homePage.checkEmailAddressIsVisible(email)
     await homePage.checkPhoneNumberIsVisible(phone)
})

