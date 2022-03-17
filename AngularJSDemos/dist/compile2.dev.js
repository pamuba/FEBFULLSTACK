"use strict";

var app = angular.module("app", []);
app.controller("msg", ['$scope', function ($scope) {}]);
app.directive('message', function () {
  return {
    compile: function compile(tElement, tAttributes) {
      console.log(tAttributes.text + " In Compile phase");
      tElement.css("border", "1px solid #C0C0C0");
      return {
        pre: function pre(scope, ielement, iattributes) {
          console.log(iattributes.text + " In Pre phase");
        },
        //post link fn is the best place to modify DOM
        post: function post(scope, ielement, iattributes) {
          console.log(iattributes.text + " In Post phase");

          if (iattributes.text === "3") {
            ielement.css("border", "1px solid red");
          } //best place to access the DPOM


          ielement.on("click", scope.btnClick);
        }
      };
    },
    controller: function controller($scope, $element, $attrs) {
      console.log($attrs.text + " In Controller phase"); //any event handling related to the scope, then it should be provided through the controller

      $scope.btnClick = function () {
        alert();
      };
    }
  };
});