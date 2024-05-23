import { After, AfterAll, BeforeAll, Status, setDefaultTimeout} from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium, devices } from 'playwright';
import { When } from '@cucumber/cucumber';
import { invokeBrowser } from "../helper/browsers/broswerManager";
import { getEnv } from "../helper/env/env";

let page: Page;
let browser: Browser;
let context : BrowserContext;

setDefaultTimeout(40 * 1000);


BeforeAll(async function(){
    getEnv();
    browser = await invokeBrowser();
});

When('User Launch a {string}', async (BroswerType: string) => {
    try {
        switch (BroswerType) {
            case "Web Browser":
                context = await browser.newContext({ viewport: null });
                //page = await context.newPage();
                break;
            case "Mobile Browser":
                context = await browser.newContext({ viewport: devices['Pixel 5'].viewport });
                //page = await context.newPage();
                break;
            
        } 
        page = await context.newPage();
    } catch (error) {
        console.error('Error during browser setup:', error);
        throw error; 
    }
});


After(async function(Scenario){
    if(Scenario.result!.status == Status.FAILED){
        await this.attach(await page.screenshot({ path: './screenshots/${Scenario.pickle.name}.png', fullPage: true }), "image/png");
    }
    await page.close();
    await context.close();    
});

AfterAll(async function (){
    await browser.close();
})


export { page, browser};
