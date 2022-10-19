const selenium = require('selenium-webdriver');

const chrome = () => {
    const driver = new selenium.Builder()
        .withCapabilities({
            browserName: 'chrome',
            chromeOptions: {
                args: [
                    '--disable-gpu',
                    '--no-sandbox',
                    '--disable-extensions'
                ]
            }
        });

    if (process.env.SERVER) {
        driver.usingServer(process.env.SERVER);
    }

    return driver.build();
};

const firefox = () => {
    const driver = new selenium.Builder()
        .withCapabilities({
            browserName: 'firefox',
        });

    if (process.env.SERVER) {
        driver.usingServer(process.env.SERVER);
    }

    return driver.build();
}

const browser = () => {
    switch (process.env.BROWSER) {
        case 'chrome':
            return chrome();
        case 'firefox':
            return firefox();
        default:
            return chrome();
    }
}

module.exports = { browser, chrome, firefox };