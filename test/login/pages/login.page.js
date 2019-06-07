/*global module, element, by, browser, expect*/
(function () {
    "use strict";

    module.exports = function () {
        this.email = element(by.model('email'));
        this.password = element(by.model('password'));
        this.loginButton = element(by.buttonText('Login'));
        this.requiredNotification = element(by.css('.formErrorContent'));
        this.loginError = element(by.css('.sweet-alert p'));
        this.loginErrorConfirm = element(by.css('.confirm'));
        this.forgetPassword = element(by.linkText('Forgot Password ?'));

        this.checkUrl = function (url) {
            expect(browser.getCurrentUrl()).toEqual(url);
        };

        this.login = function (email, password) {
            if (email !== '') {
                this.email.sendKeys(email);
            }
            if (password !== '') {
                this.password.sendKeys(password);
            }
            this.loginButton.click().then(function () {
                browser.driver.sleep(5000);
            });

        };

        this.handleLoginError = function () {
            var message = this.loginError.getText();
            expect(message).toEqual('Wrong username or password.');
            this.loginErrorConfirm.click().then(function () {
                browser.driver.sleep(1000);
            });
        };
    };
}());