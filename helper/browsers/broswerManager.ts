import { LaunchOptions, chromium, firefox, webkit } from "playwright";

const options: LaunchOptions = {
    headless : false,
    
}

export const invokeBrowser = () => {
    const browserType = process.env.BROWSER;
    switch(browserType){
        case "chromium":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        default:
            throw new Error("Please Set The Proper Browser!")        
    }
}
