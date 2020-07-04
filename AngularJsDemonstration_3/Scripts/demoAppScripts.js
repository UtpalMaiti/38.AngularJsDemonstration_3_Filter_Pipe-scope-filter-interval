/// <reference path="angular.js" />
var app = angular.module('demoApp', []);

app.filter('YesNo', function () {

    return function (input, sal,name) {
        console.log('Name is : '+name+' Salary is : ' + sal);

        if (input) {
            return 'Yes';
        }
        else
        {
            return 'No';
        }
    };

});

app.controller('demoCntrl', function ($scope,$filter,$interval) {

    $scope.employeeList = [
        { Id: 101, Name: 'Abhinav', Location: 'Bangalore', Salary: 12345, IsContract:true },
        { Id: 102, Name: 'Abhishek', Location: 'Chennai', Salary: 10000, IsContract: false },
        { Id: 103, Name: 'Ajay', Location: 'Bangalore', Salary: 34567, IsContract: true },
        { Id: 104, Name: 'Anil', Location: 'Bangalore', Salary: 5000, IsContract: false },
        { Id: 105, Name: 'Anirudh', Location: 'Chennai', Salary: 56789, IsContract: true },
        { Id: 106, Name: 'Akash', Location: 'Bangalore', Salary: 67890, IsContract: false },
        { Id: 107, Name: 'Akshay', Location: 'Bangalore', Salary: 78900, IsContract: true }
    ];

    $interval(addNewRecordEachTime, 5000,5);

    function addNewRecordEachTime() {
        var getId = $scope.employeeList[$scope.employeeList.length - 1].Id + 1;

        $scope.employeeList.push({
            Id: getId, Name: 'New Name ', Location: getId % 2 == 0 ? 'Bangalore' : 'Chennai',
            Salary:44444,IsContract:getId%2==0
        });
    }
    $scope.searchEmployee = function () {
        //var empArray = $filter('filter')($scope.employeeList, { Id: $scope.empId });

        //if (empArray!=undefined && empArray!=null && empArray.length > 0) {
        //    console.log(empArray[0]);
        //}

        var empArray = $filter('filter')($scope.employeeList, { Location: 'Bangalore', IsContract:true });

        console.log(empArray);
    };
});