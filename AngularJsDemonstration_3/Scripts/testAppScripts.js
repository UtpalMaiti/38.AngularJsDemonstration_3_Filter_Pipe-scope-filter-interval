/// <reference path="angular.js" />
var app = angular.module('testApp', []);

app.factory('arithOpsFactory', function () {

    var myFac = {};

    myFac.add = function (a, b) {
        return a + b;
    };

    myFac.sub = function (a, b) {
        return a - b;
    };

    myFac.mul = function (a, b) {
        return a * b;
    };

    myFac.div = function (a, b) {
        return a / b;
    };

    return myFac;
});

app.controller('testCntrl', function ($scope, arithOpsFactory) {

    $scope.arithOps = function (i) {
        switch (i) {
            case 1: var result = arithOpsFactory.add($scope.firstNumber, $scope.secondNumber);
                alert("Addition Result is : " + result);
                break;
            case 2: var result = arithOpsFactory.sub($scope.firstNumber, $scope.secondNumber);
                alert("Subtraction Result is : " + result);
                break;
            case 3: var result = arithOpsFactory.mul($scope.firstNumber, $scope.secondNumber);
                alert("Multiplication Result is : " + result);
                break;
            case 4: var result = arithOpsFactory.div($scope.firstNumber, $scope.secondNumber);
                alert("Division Result is : " + result);
                break;
        }
    };

});