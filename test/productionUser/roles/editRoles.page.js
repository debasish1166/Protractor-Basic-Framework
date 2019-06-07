/*global module, element, by, browser*/

(function () {
    "use strict";
    module.exports = function () {
        this.deleteButton = element(by.css('.btn-icon-delete'));
        this.createNewRoleButton = element(by.id('createNewRole'));
        this.inputField = element(by.model('row[column.field]'));


        this.gotoPermissions = function () {
            this.managePermissions.click();
            browser.driver.sleep(10000);
        };
    };
}());