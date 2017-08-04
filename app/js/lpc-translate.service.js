var LpcWebTest2017 = require("./app.module");

    var LpcTranslateService =LpcWebTest2017.service('LpcTranslateService',['$http','$rootScope',function($http,$rootScope){
        
        var PROPERTIES_URL;
            //TODO

            setPropertiesUrlImpl = function(url){
                //TODO
                PROPERTIES_URL = url;
            },
            loadPropertiesImpl = function(){
                //TODO

                return $http.get(PROPERTIES_URL).then(function(response){
                    
                    return response.data;
                });
            };

        return {
            setPropertiesUrl : setPropertiesUrlImpl,
            loadProperties : loadPropertiesImpl
        }
    }]);

    module.exports= LpcTranslateService;