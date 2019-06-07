/*global module, element, by, browser*/

(function () {
    "use strict";
    module.exports = function () {

        var username = browser.params.prodUser.username;
        this.signedUser = element(by.linkText(username));
        this.managePermissions = element(by.linkText('Manage Users/Permissions'));
        this.manageProducts = element(by.linkText('Manage Products'));

        this.gotoPermissions = function () {
            this.managePermissions.click();
            browser.driver.sleep(10000);
        };

        this.goToProducts = function () {
            this.manageProducts.click();
            browser.driver.sleep(5000);
        };
    };
}());