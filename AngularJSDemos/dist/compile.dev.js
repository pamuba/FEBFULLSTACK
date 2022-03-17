"use strict";

var app = angular.module("app", []);
app.controller("msg", ['$scope', function ($scope) {}]);
app.directive('message', function () {
  return {
    compile: function compile(tElement, tAttributes) {
      console.log(tAttributes.text + " In Compile phase");
      return {
        pre: function pre(scope, ielement, iattributes) {
          console.log(iattributes.text + " In Pre phase");
        },
        post: function post(scope, ielement, iattributes) {
          console.log(iattributes.text + " In Post phase");
        }
      };
    },
    controller: function controller($scope, $element, $attrs) {
      console.log($attrs.text + " In Controller phase");
    }
  };
});