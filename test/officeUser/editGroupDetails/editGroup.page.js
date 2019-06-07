/*global module, element, by, browser, expect*/
(function () {
    "use strict";
    module.exports = function () {

        this.editPermissionsTab = element(by.linkText('Edit Permissions'));
        this.saveButton = element.all(by.buttonText('Save')).first();
        this.warningModal = element.all(by.css('.modal-body p')).first();
        this.yesModal = element.all(by.buttonText('Yes')).first();
        var warningText = 'Change of Permission will overwrite this role for all users. Are you sure?';


        this.checkUrl = function (url) {
            expect(browser.getCurrentUrl()).toEqual(url);
        };

        this.changePermissionWithCss = function (css) {

            this.editPermissionsTab.click();
            browser.driver.sleep(1000);
            element(by.css(css)).click();
            this.saveButton.click();
            browser.driver.sleep(3000);
            var warning = this.warningModal.getText();
            expect(warning).toEqual(warningText);
            this.yesModal.click();
            browser.driver.sleep(10000);

        };

    };
}());