const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../page_objects/loginPage');
const assert = require("assert");

const login = new LoginPage();

Given(/^that the site loads then I accept cookies$/, async function () {
    await this.driver.wait(() => this.driver.findElement(login.acceptCookiesLocator));
    await this.driver.findElement(login.acceptCookiesLocator).click();
});

Given(/^user informs login with value equal '(.*)'$/, async function (value) {
    await this.driver.wait(() => this.driver.findElement(login.txtUsername));
    await this.driver.findElement(login.txtUsername).sendKeys(value);
});

Given(/^user informs password with value equal '(.*)'$/, async function (value) {
    await this.driver.wait(() => this.driver.findElement(login.txtPassword));
    await this.driver.findElement(login.txtPassword).sendKeys(value);
});

When(/^user clicks on login button$/, async function () {
    await this.driver.findElement(login.mainLoginButton).click();
});

Then(/^user should see message '(.*)'$/, async function (title) {
    await this.driver.wait(() => this.driver.findElement(login.lblValidationPass));
    this.driver.findElement(login.lblValidationPass).getText().then((value) => {
        assert.equal(value, title);
    });
});
