const { After, setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { browser } = require('./browsers');

class CustomWorld {
    constructor() {

        console.log(`Browser: ${process.env.BROWSER || 'Chrome'}`);
        console.log(`Server: ${process.env.SERVER || 'Locahost'}`);

        this.driver = browser();
        this.driver.manage().window().maximize();
        this.driver.manage().setTimeouts({
            implicit: 60000,
            pageLoad: 60000,
            script: 60000
        });
    }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(60 * 1000);

After(function () {
    this.driver.close();
    this.driver.quit();
});