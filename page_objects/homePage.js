const { By } = require("selenium-webdriver");

const home = function() {
    this.homeTitle = By.xpath("//h1[@class='styled__StyledText-sc-1pogpev-0 hFnuAt' and contains(text(), 'Employee') or contains(text(), 'Empleado')]");
}

module.exports = home;