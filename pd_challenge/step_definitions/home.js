const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require("assert");
const SchedulePage = require('../page_objects/schedulePage');

const schedule = new SchedulePage();


Given(/^user clicks Schedule on navigation bar$/, async function () {
    await this.driver.wait(() => this.driver.findElement(schedule.btnSchedule));
    await this.driver.findElement(schedule.btnSchedule).click();
});

Then(/^I navigate to '(.*)' Page$/, async function (url) {
    await this.driver.get("https://test1234.planday.com/" + url.toLowerCase());
    await this.driver.wait(() => this.driver.getCurrentUrl())
    this.driver.getCurrentUrl().then((value) => {
        assert.equal(value, 'https://test1234.planday.com/'+url.toLowerCase() );
    });
});