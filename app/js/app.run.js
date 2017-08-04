'use strict';

var LpcWebTest2017 = require("./app.module");
var LpcTranslateService = require("./lpc-translate.service");
var RESOURCES = require("./app.constants");
var lpcTranslate = require("./lpc-translate.filter");
var PostsController = require("./pots-controller.controller");
var directive = require("./lpc-lazy-background.directive");

    LpcWebTest2017.run(['LpcTranslateService','RESOURCES',function(LpcTranslateService,RESOURCES){
        //TODO

        LpcTranslateService.setPropertiesUrl(RESOURCES.PROPERTIES_URL);
        /* LpcTranslateService.loadProperties(); */

        
    }]);