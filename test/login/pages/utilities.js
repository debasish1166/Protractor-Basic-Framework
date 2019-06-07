/*global module, element, by, browser, expect*/
(function () {
    "use strict";
    module.exports = function () {

        this.baseUrl = 'http://staging-b2b.gybe-design.com/#/';
        this.urlLogin = this.baseUrl + 'login';
        this.urlHome = this.baseUrl + 'home';
        this.urlIndex = this.baseUrl + 'users/index';
        this.urlEditPermission = this.baseUrl + 'group/edit';
        this.urlReset = this.baseUrl + 'reset';
        this.editProdUser = this.baseUrl + 'office/edit-office-user';
        this.productIndex = this.baseUrl + 'products/';

        this.checkUrl = function (url) {
            expect(browser.getCurrentUrl()).toEqual(url);
        };

        this.logout = function (username) {
            element(by.linkText(username)).click().then(function () {
                browser.driver.sleep(2000);
                element(by.linkText('Logout')).click();
                browser.driver.sleep(2000);
            });
            this.checkUrl(this.urlLogin);
        };

        this.logoutAfterChange = function (name) {
            element(by.linkText(name)).click();
            browser.driver.sleep(2000);
            element(by.linkText('Logout')).click().then(function () {
                browser.driver.sleep(3000);
                element(by.css('.confirm')).click();
            });
            browser.driver.sleep(5000);
            this.checkUrl(this.urlLogin);
        };

        this.checkIfAvailableById = function (id) {
            expect(element(by.id(id)).isPresent()).toBe(false);
            browser.driver.sleep(3000);
        };
    };
}());