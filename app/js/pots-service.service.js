'use strict';

var LpcWebTest2017 = require("./app.module");
var RESOURCES = require("./app.constants");
module.exports = LpcWebTest2017.service('PotsService', ['$http', 'RESOURCES', function ($http, RESOURCES) {
    var getImpl = function () {
        //TODO

        var getPots = function () {

            return $http.get(RESOURCES.GET_POTS_URL).then(function (response) {

                return response.data;

            });
        };

        return {

            pots: getPots
        };

    };

    return {
        get: getImpl
    };
}]);