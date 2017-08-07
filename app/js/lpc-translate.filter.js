'use strict';


var LpcWebTest2017 = require("./app.module");
var LpcTranslateService = require("./lpc-translate.service");
var _ = require('lodash');
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
}]).filter('lpcTranslateFilter',['$filter',function($filter){



    var filter= function(pots,keyWord,locale){

        if(_.isUndefined(keyWord)){
            return pots;
        }
        var getTranslate = $filter('lpcTranslate');
        
        var filtredPots=[];
        for(var i=0; i<pots.length; i++ ){
                var potName = getTranslate(pots[i].name,locale);

                
            if(potName.toLowerCase().indexOf(keyWord.toLowerCase())>-1){
                filtredPots.push(pots[i]);

            }
        }
            return filtredPots;
};

    return filter;

}]);