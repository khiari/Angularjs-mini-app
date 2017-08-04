'use strict';


var LpcWebTest2017 = require("./app.module");
var LpcTranslateService = require("./lpc-translate.service");
module.exports = LpcWebTest2017.filter('lpcTranslate', ['LpcTranslateService', '$rootScope', function (LpcTranslateService, $rootScope) {
    //TODO
    var cache = null;
    var loaded = false;
    LpcTranslateService.loadProperties().then(function (properties) {

        cache = properties;
        loaded = true;
    });

    var filter = function (key, locale) {


        if (loaded)

            return cache[locale][key];

        return '';
        //TODO

    }

    //TODO
    filter.$stateful = true;
    return filter;
}]);