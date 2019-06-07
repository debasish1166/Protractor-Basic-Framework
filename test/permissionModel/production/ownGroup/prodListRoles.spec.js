/*global describe, expect, require, beforeEach, browser, it, element, by, beforeAll*/

(function () {
    "use strict";

    var GeneralPage = require('../../../login/pages/utilities.js'),
        LoginPage = require('../../../login/pages/login.page.js'),
        HomePage = require('../../../officeUser/officeAdminHome/officeAdmin.page.js'),
        ManageUser = require('../../../officeUser/manageUser/manageUser.page.js'),
        EditGroup = require('../../../officeUser/editGroupDetails/editGroup.page.js'),
        ProdHome = require('../../../productionUser/prodAdminHome/prodAdmin.page.js'),
        ProdManageUser = require('../../../productionUser/manageUser/manageProdUser.page.js'),
        EditRoles = require('../../../productionUser/roles/editRoles.page.js'),

        utilities = new GeneralPage(),
        loginPage = new LoginPage(),
        homePage = new HomePage(),
        manageUser = new ManageUser(),
        editGroup = new EditGroup(),
        prodHome = new ProdHome(),
        manageProdUser = new ProdManageUser(),
        roles = new EditRoles(),

        email,
        password,
        username;

    describe('Testing the permission model of a Production user - Remove Listing Roles', function () {


        beforeAll(function () {
            browser.ignoreSynchronization = true;
            browser.get(utilities.urlLogin);
        });

        it('should log in as an office user', function () {

            email = browser.params.officeAdmin.email;
            password = browser.params.officeAdmin.password;
            username = browser.params.officeAdmin.username;

            loginPage.login(email, password);
            utilities.checkUrl(utilities.urlHome);
        });

        it('should aloow an office user to go to manage permissions page', function () {
            browser.driver.sleep(5000);
            utilities.checkUrl(utilities.urlHome);
            homePage.signedUser.click().then(function () {
                browser.driver.sleep(2000);
                homePage.gotoPermissions();
                utilities.checkUrl(utilities.urlIndex);
            });
        });

        it('office admin can go to the edit permissions page of production groups', function () {
            browser.driver.sleep(5000);
            manageUser.goToProduction();
            manageUser.editPermissionsOfFirstGroup();
            expect(utilities.checkUrl(utilities.urlEditPermission));

        });

        it('office admin can edit permissions and save changes', function () {
            browser.driver.sleep(7000);
            editGroup.changePermissionWithCss('.List-Roles');
        });

        it('office admin can logout from the application', function () {
            utilities.logoutAfterChange(username);
        });

        it('user can log in as a production admin', function () {
            browser.driver.sleep(3000);
            email = browser.params.prodUser.email;
            password = browser.params.prodUser.password;
            username = browser.params.prodUser.username;

            loginPage.login(email, password);
            utilities.checkUrl(utilities.urlHome);

        });

        it('production admin can go to manage permissions page', function () {
            prodHome.signedUser.click().then(function () {
                browser.driver.sleep(2000);
                prodHome.gotoPermissions();
                utilities.checkUrl(utilities.urlIndex);
            });
        });

        //Bugs needs fixing ERP-3959
        it('production admin can go to manage permissions page to see permissions', function () {
            manageProdUser.goToProduction();
            utilities.checkIfAvailableById('manageUserRolesButton');
        });

        it('production admin can log out from the page', function () {
            utilities.logout(username);
        });

    });
}());