define(['./module','ng-chart','chart'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl2', ['$scope', 'testService', 'commonService', function ($scope, testService, commonService) {
        $scope.a = 5;
        $scope.s = "你好！";
        $scope.t = testService.getData();
        $scope.n = testService.data1;
        $scope.personName = testService.getPerson();
        $scope.pop = function () {
            alert("真的么？")
        };
        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
    }]);
});
