/*global module, exports, browser*/
(function () {
    "use strict";
    exports.config = {

        allScriptsTimeout: 99999,

        // The address of a running selenium server.
        seleniumAddress: 'http://localhost:4444/wd/hub',

        // Capabilities to be passed to the webdriver instance.
        capabilities: {
            'browserName': 'chrome'
        },

        baseUrl: 'http://localhost:9000/',

        framework: 'jasmine',

        // Spec patterns are relative to the current working directly when
        // protractor is called.
        specs: ['permissionModel/production/products/productList.spec.js'],

        suites: {
            productionOwnGroup: [
                'permissionModel/production/ownGroup/prodCreateRole.spec.js',
                'permissionModel/production/ownGroup/prodDeleteRoles.spec.js',
                'permissionModel/production/ownGroup/prodCreateUser.spec.js',
                'permissionModel/production/ownGroup/prodManagePermissions.spec.js',
                'permissionModel/production/ownGroup/prodReadGroup.spec.js',
                'permissionModel/production/ownGroup/prodListUsers.spec.js'
            ],
            productionProducts: [
                'permissionModel/production/products/productReadPrice.spec.js',
                'permissionModel/production/products/productRead.spec.js',
                'permissionModel/production/products/productList.spec.js'
            ]
        },

        params: {
            officeAdmin: {
                username: 'Senuri Office admin',
                email: 'senuri.wijenayake+oa@gmail.com',
                password: "abcd1234"
            },

            prodUser: {
                username: 'SampleP a',
                email: 'pragashonlink+pa@gmail.com',
                password: 'abcd1234'
            }
            /*
            prodUser: {
                username: 'Senuri Production User',
                email: 'senuri.wijenayake+pu@gmail.com',
                password: 'abcd1234'
            }*/

        },

        onPrepare: function () {
            browser.driver.manage().window().maximize();
        },
        // Options to be passed to Jasmine-node.
        jasmineNodeOpts: {
            showColors: true,
            defaultTimeoutInterval: 300000000,
            isVerbose: true,
            includeStackTrace: true
        }
    };
}());
