'use strict';

var LpcWebTest2017 = require("./app.module");
var _ = require('lodash');

LpcWebTest2017.directive('lpcLazyBackground', [function () {
  var lpcLazyBackgroundLink = function (scope, elem, attr) {
    //TODO
      var img;
      img = null;

      elem.append(" <img class='loader' src='images/loading.svg' alt='loader'>"); 
       
      img = new Image();
      img.src = scope.lpcLazyBackground;
        
      img.onload = function() {            
            elem.children()[1].remove();
            elem.append(img);
          };

        }
  return {
    restrict: 'A', scope: {lpcLazyBackground: '='}, link: lpcLazyBackgroundLink
  }

}]);

