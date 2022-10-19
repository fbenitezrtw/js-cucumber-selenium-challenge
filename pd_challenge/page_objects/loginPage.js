const { By } = require("selenium-webdriver");

const login = function() {
    this.mainLoginButton = By.id("MainLoginButton");
    this.txtUsername = By.id("Username");
    this.txtPassword = By.id("Password");
    this.lblValidationUser = By.xpath("//p[@id='Username-validation-error']");
    this.lblValidationPass = By.xpath("//p[@id='Password-validation-error']");
    this.acceptCookiesLocator = By.xpath("//div[@class='cookie-banner__button']//button[contains(text(), 'OK') or contains(text(), 'Aceptar')]");
}

module.exports = login;