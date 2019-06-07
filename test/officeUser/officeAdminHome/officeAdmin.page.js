/*global module, element, by, browser, expect*/
(function () {
    "use strict";
    module.exports = function () {

        var username = browser.params.officeAdmin.username;
        this.signedUser = element(by.linkText(username));
        this.managePermissions = element(by.linkText('Manage Users/Permissions'));

        this.gotoPermissions = function () {
            this.managePermissions.click();
            browser.driver.sleep(10000);
        };

    };
}());