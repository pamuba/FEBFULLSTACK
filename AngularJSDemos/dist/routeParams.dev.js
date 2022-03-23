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
myApp.controller('suminput', ['$scope', '$location', '$interpolate', function ($scope, $location, $interpolate) {
  $scope.a = 0;
  $scope.b = 0;

  $scope.doSum = function () {
    var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope);
    $location.path(url);
  };
}]);