/*global describe, require, beforeEach, browser, it, expect*/
(function () {

    "use strict";

    describe('Login Process', function () {

        var CreatePage = require('./pages/login.page.js'),
            GeneralPage = require('./pages/utilities.js'),

            loginPage = new CreatePage(),
            utilities = new GeneralPage(),

            email,
            password,
            username;

        beforeEach(function () {
            browser.ignoreSynchronization = true;
            browser.get(utilities.urlLogin);

        });

        it('should display a error message when a required field is empty', function () {
            email = 'senuri.wijenayake+oa@gmail.com';
            password = '';

            loginPage.login(email, password);
            var text = loginPage.requiredNotification.getText();
            expect(text).toContain('* Minimum 8 characters required');

        });

        it('should display a error message when a required field is empty', function () {
            email = '';
            password = 'abcd1234';

            loginPage.login(email, password);
            var text = loginPage.requiredNotification.getText();
            expect(text).toContain('* Invalid email address');

        });

        it('should display error message when entered incorrect email', function () {
            email = 'test123@gmail.com';
            password = 'abcd1234';

            loginPage.login(email, password);
            loginPage.handleLoginError();
        });

        it('should display error message when entered incorrect password', function () {
            email = 'senuri.wijenayake+oa@gmail.com';
            password = 'abcd1233';

            loginPage.login(email, password);
            loginPage.handleLoginError();

        });

        it('should redirect user to the reset password page', function () {
            loginPage.forgetPassword.click().then(function () {
                browser.driver.sleep(10000);
                utilities.checkUrl(utilities.urlReset);
            });
        });

        it('should redirect user to home page when entered the correct email and password', function () {
            email = 'senuri.wijenayake+oa@gmail.com';
            password = 'abcd1234';
            username = 'Senuri Office admin';
            loginPage.login(email, password);

        });

        it('user can logout from the application', function () {
            browser.driver.sleep(3000);
            utilities.logout(username);
        });


    });

}());
