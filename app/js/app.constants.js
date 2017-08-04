'use strict';

var LpcWebTest2017 = require("./app.module");
 var RESOURCES= LpcWebTest2017.constant('RESOURCES',(function(){
    var BASE_URL = 'https://recrutement.lepotcommuntest.fr/recruting/2017';
    return {
      PROPERTIES_URL: BASE_URL + '/get-properties',
      GET_POTS_URL: BASE_URL + '/get-pots'
    }
  })());

  module.exports = RESOURCES;

