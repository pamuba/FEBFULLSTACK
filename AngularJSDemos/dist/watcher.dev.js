"use strict";

var myApp = angular.module("myModule", []);
myApp.controller("myController", function ($scope) {
  // $scope.a = 10
  // $scope.b = 20
  // $scope.c = 30
  // $scope.d = 40
  // // $scope.updateC = function(){
  // //     $scope.c = $scope.a * $scope.b
  // // }
  // //manual watcher for c
  // $scope.$watch("c", function(newVal, oldVal){
  //     if(newVal != oldVal)
  //         console.log("Updated C to "+ newVal)
  // });
  // $scope.$watchGroup(["a","b"], function(newVal, oldVal){
  //     console.log(oldVal+" "+newVal)
  //     if(newVal != oldVal)
  //          $scope.c = $scope.b * $scope.a
  // });
  //     $scope.$watch("a", function(newVal, oldVal){
  //         if(newVal != oldVal)
  //             $scope.c = $scope.b * 2
  //     })
  //     $scope.$watch("b", function(newVal, oldVal){
  //         if(newVal != oldVal)
  //             $scope.b = $scope.a * 2
  // });
  ///////////////////////////////////////watcher with objects
  // $scope.o = {
  //     a:1,
  //     b:2,
  //     c:3
  // }
  // //reference watcher
  // // $scope.$watch("o", function(newVal, oldVal){
  // //     if(newVal != oldVal)
  // //         $scope.o.c = $scope.o.a * $scope.o.a
  // // });
  // //equility watcher
  // $scope.$watch("o", function(newVal, oldVal){
  //     if(newVal != oldVal)
  //         $scope.o.c = $scope.o.a * $scope.o.b
  // }, true);
  //watchers with collections
  $scope.emps = [{
    empno: "1001",
    ename: "John"
  }, {
    empno: "1002",
    ename: "Jim"
  }, {
    empno: "1003",
    ename: "Jill"
  }, {
    empno: "1004",
    ename: "Mill"
  }];

  $scope.addEmp = function () {
    var newEmpno = 100 + $scope.emps.lenght + 1;
    var newName = "ename" + newEmpno;
    $scope.emps.push({
      empno: newEmpno,
      ename: newName
    });
  };

  $scope.modify3rdEmp = function () {
    $scope.emps[2].ename = "Test";
  };
});