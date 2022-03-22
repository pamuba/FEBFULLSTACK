"use strict";

var myApp = angular.module("myModule", ['ngRoute']);
myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/first-msg', {
    // template:'<b><h2>This is the first message</h2></b>'
    templateUrl: 'msg1.html',
    controller: 'message1'
  }).when('/second-msg', {
    // template:'<b><h2>This is the second message</h2></b>'
    templateUrl: 'msg2.html',
    controller: 'message2'
  }).when('/third-msg', {
    // redirectTo:"/second-msg"
    redirectTo: function redirectTo() {
      alert("Page Under Construction");
      return "/second-msg";
    }
  }).otherwise({
    template: '<b><h2>Click on the links on the left</h2></b>'
  });
}]);
myApp.controller("message1", function ($scope) {
  $scope.a = 10;
  $scope.b = 20;
});
myApp.controller("message2", function ($scope) {
  $scope.c = 30;
  $scope.d = 40;
});