"use strict";

var myApp = angular.module("myModule", ['ngRoute']);
myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/sumurl/:a/:b', {
    templateUrl: 'sumurl.html',
    controller: 'sumurl'
  }).when('/suminput', {
    templateUrl: 'suminput.html',
    controller: 'suminput'
  }).when('/', {
    template: '<h1>Welome to the Site</h1>'
  }).otherwise({
    template: '<h1>404...Click on the Links</h1>'
  });
}]);
myApp.controller('sumurl', ['$scope', '$routeParams', function ($scope, $routeParams) {
  $scope.a = $routeParams.a;
  $scope.b = $routeParams.b;
}]);