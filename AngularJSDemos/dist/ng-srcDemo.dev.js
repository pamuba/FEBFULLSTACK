"use strict";

var myApp = angular.module("myModule", []);
myApp.controller("myController", function ($scope) {
  var country = {
    name: "USA",
    capital: "Washington DC",
    flag: "Images/flag.png"
  };
  $scope.country = country;
});