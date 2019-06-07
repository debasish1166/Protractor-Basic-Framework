/*global module, element, by, browser, expect*/
(function () {
    "use strict";
    module.exports = function () {
        this.productionTab = element(by.linkText('Production'));
        this.editButton = element.all(by.id('firstEditButton')).first();

        this.getCurrentUrl = function () {
            return browser.getCurrentUrl();
        };

        this.goToProduction = function () {
            this.productionTab.click();
            browser.driver.sleep(5000);
        };

        this.editPermissionsOfFirstGroup = function () {
            this.editButton.click();
            browser.driver.sleep(7000);
        };
    };
}());