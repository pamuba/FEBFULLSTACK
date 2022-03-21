"use strict";

angular.module('calcNumbers', []).controller('calcNumbersController', function calcNumbersController($scope) {
  $scope.numOne = 0;
  $scope.numTwo = 0;
  $scope.myOper = "+";

  $scope.doCalculation = function (myOper) {
    switch (myOper) {
      case "+":
        return parseFloat($scope.numOne.toFixed(2)) + parseFloat($scope.numTwo.toFixed(2));
        break;

      case "-":
        return parseFloat($scope.numOne.toFixed(2)) - parseFloat($scope.numTwo.toFixed(2));
        break;

      case "*":
        return parseFloat($scope.numOne.toFixed(2)) * parseFloat($scope.numTwo.toFixed(2));
        break;

      case "/":
        return parseFloat($scope.numOne.toFixed(2)) / parseFloat($scope.numTwo.toFixed(2));
        break;
    }
  };
});