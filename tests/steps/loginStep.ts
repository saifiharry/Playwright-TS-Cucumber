import { Given, When, Then } from '@cucumber/cucumber'
import { page } from '../../support/hooks'
import { PageManager} from '../../support/pageManager'

let pageManager: PageManager;


Given('User Navigate To HomePage', async () => {

    if (!pageManager) {
        pageManager = PageManager.getInstance(page);
      }

    await page.goto(process.env.URL);
    await page.waitForTimeout(3000);
    await pageManager.homePage.getTitlePage();
});


When('User Click on Hello SignIn Button', async ()=>{

    await pageManager.homePage.clickHelloSignInBtn();

})


Then('User Enter Email From LoginPage', async () => {
   
    await pageManager.loginPage.getTitlePage();
    await pageManager.loginPage.enterEmail(process.env.USERNAME);

})


Then('User Click on Continue Button', async () => {

    await pageManager.loginPage.clickContinueBtn();
})


Then('User Enter Password', async ()=>{

    await pageManager.loginPage.enterPassword(process.env.PASSWORD);

})


Then('User click on SignIn Button', async ()=> {

    await pageManager.loginPage.clickSignInBtn();

})
