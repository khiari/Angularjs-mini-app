'use strict';

var LpcWebTest2017 = require("./app.module");
var PotsService = require("./pots-service.service");
module.exports = LpcWebTest2017.controller('PotsController', ['$scope', 'PotsService', function ($scope, PotsService, $window) {
    //TODO


    $scope.pots = {};

    $scope.init = function () {
        if (localStorage.getItem("locale"))
            $scope.locale =localStorage.getItem("locale");
        else
            $scope.locale = 'fr';
        PotsService.get().pots().then(onPotsComplete);

    }

    var onPotsComplete = function (data) {
        $scope.pots = data;
    };

    $scope.changeLocale = function (language) {
        $scope.locale = language;
        localStorage.setItem("locale", $scope.locale);
    };

    $scope.init();

}]);