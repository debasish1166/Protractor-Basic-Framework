/*global describe, expect, require, beforeEach, browser, it, element, by*/

(function () {
    "use strict";

    describe('Forget password page facilitates setting up a new password', function () {

        var ResetPage = require('./pages/reset.page.js'),
            GeneralPage = require('../login/pages/utilities.js'),

            utilities = new GeneralPage(),
            resetPage = new ResetPage();

        beforeEach(function () {
            browser.ignoreSynchronization = true;
            browser.get(utilities.urlReset);
        });

        it('should display error message when entered incorrect email', function () {
            browser.driver.sleep(3000);
            resetPage.email.sendKeys('senuri.wijenayakegmail.com');
            resetPage.resetButton.click().then(function () {
                var text = element(by.css('.formErrorContent')).getText();
                expect(text).toContain('* Invalid email address');
            });
        });

        it('should send a password reset email if format is correct', function () {
            resetPage.email.sendKeys('senuri.wijenayake+oa@gmail.com');
            resetPage.resetButton.click().then(function () {
                browser.driver.sleep(3000);
                var message = element(by.css('.sweet-alert p')).getText();
                expect(message).toEqual('Password reset request was sent.');
                expect(browser.getCurrentUrl()).toEqual(utilities.urlLogin);
            });
        });
    });
}());