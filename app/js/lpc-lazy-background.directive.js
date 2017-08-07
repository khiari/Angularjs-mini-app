'use strict';

var LpcWebTest2017 = require("./app.module");
var _ = require('lodash');

LpcWebTest2017.directive('lpcLazyBackground', [function () {
  var lpcLazyBackgroundLink = function (scope, elem, attr) {

    //attr.lpcLazyBackground == ""
    //TODO


    var process = function (url,oldUrl) {

      var img;
      img = null;
      elem.html('');

      elem.append(" <img class='loader' src='images/loading.svg' alt='loader'>");

      img = new Image();
      img.src = url;

      img.onload = function () {
        elem.html('');
        //elem.children()[1].remove();
        elem.append(img);
        console.log(url + " loaded");
      };

    }
    scope.$watch(attr.lpcLazyBackground, process);
  }


  return {
    restrict: 'A', scope: false, link: lpcLazyBackgroundLink
  }

}]);

