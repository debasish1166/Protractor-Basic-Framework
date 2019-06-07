/*global module, element, by, browser*/

(function () {
    "use strict";

    module.exports = function () {
        this.email = element(by.model('email'));
        this.resetButton = element(by.buttonText('Reset'));
    };

}());