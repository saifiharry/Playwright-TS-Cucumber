import { Page, Locator } from "@playwright/test"
export default class LoginPage {

    // NEED To Assign Variable Data Type As Locator
    readonly page: Page
    readonly emailEl: Locator
    readonly pwdEl: Locator
    readonly continueBt: Locator
    readonly signInBt: Locator


    // PASS The Value of Locator
    constructor(page: Page) {
        this.page = page
        this.emailEl = this.page.locator('#ap_email')
        this.pwdEl = this.page.locator('#ap_password')
        this.continueBt = this.page.locator('css=input#continue')
        this.signInBt = this.page.locator('#signInSubmit')
    }

    async getTitlePage(){
        const actualTitle = await this.page.title()
        console.log('LoginPage.actualTitle: '+actualTitle)
    }

    // CREATE ASYNC Method of Each Locator
    async enterEmail(strUser: string) {
        await this.emailEl.fill(strUser)
    }
    async enterPassword(strPwd: string) {
        await this.pwdEl.fill(strPwd)
    }
    async clickSignInBtn() {
        await this.signInBt.click()
    }
    async clickContinueBtn() {
        await this.continueBt.click()
    }

    // COMBINED Method
    async validLogin(strUser: string) {
        await this.enterEmail(strUser)
        await this.clickContinueBtn();
    }

}
