"use strict";

var myApp = angular.module("myModule", []);
myApp.controller("myController", function ($scope, $rootScope) {
  $scope.a = 10;
  $scope.b = 20;
  $scope.s = 0;

  $scope.calcSum = function () {
    $scope.s = Number($scope.a) + Number($scope.b);
  }; // $scope.c = 30
  // $scope.$watch("a", function(newVal, oldVal){
  //     if(newVal != oldVal)
  //         console.log("A is changed to:"+ newVal)
  // })
  // $scope.$watch("b", function(newVal, oldVal){
  //     if(newVal != oldVal)
  //         console.log("B is changed to:"+ newVal)
  // });
  // $scope.$watch("c", function(newVal, oldVal){
  //     if(newVal != oldVal)
  //        { console.log("C is changed to:"+ newVal)
  //          if($scope.c > 50){
  //              $scope.a = 1000;
  //          }
  //     }
  // });
  // $rootScope.$watch(function(){
  //     console.log('--------- diges process started-----------')
  // })

});

var btnClick = function btnClick() {
  var $scope = angular.element($('#div1')).scope(); // $scope.s = Number($scope.a) + Number($scope.b)
  // $scope.$apply()

  $scope.$apply(function () {
    $scope.s = Number($scope.a) + Number($scope.b);
  });
};