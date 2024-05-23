import { Page, Locator } from "@playwright/test"
export default class HomePage {

    // NEED To Assign Variable Data Type As Locator
    readonly page: Page
    readonly helloSignInBtn: Locator

    // PASS The Value of Locator
    constructor(page: Page) {
        this.page = page
        this.helloSignInBtn = this.page.locator('#nav-link-accountList')
    }

    // CREATE ASYNC Method of Each Locator
    async clickHelloSignInBtn() {
        await this.helloSignInBtn.click();
    }

    async getTitlePage(){
        const actualTitle = await this.page.title()
        console.log('HomePage.actualTitle: '+actualTitle)
    }

}