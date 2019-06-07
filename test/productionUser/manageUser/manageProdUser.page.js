/*global module, element, by, browser*/

(function () {
    "use strict";
    module.exports = function () {
        this.productionTab = element(by.id('ProductionTab'));
        this.manageProdRoles = element(by.id('manageUserRolesButton'));

        this.getCurrentUrl = function () {
            return browser.getCurrentUrl();
        };

        this.goToProduction = function () {
            this.productionTab.click();
            browser.driver.sleep(5000);
        };

        this.manageProductionRoles = function () {
            this.manageProdRoles.click();
            browser.driver.sleep(3000);
        };
    };
}());