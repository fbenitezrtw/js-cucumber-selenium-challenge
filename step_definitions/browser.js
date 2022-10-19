const { Given } = require('@cucumber/cucumber');

Given(/^I open '(.*)'$/, async function (url) {
    await this.driver.get(url);
});