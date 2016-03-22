define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl2', ['$scope', 'testService', function ($scope, testService) {
        $scope.a = 5;
        $scope.s = "你好！";
        $scope.t = testService.getData();
        $scope.n = testService.data1;
        $scope.personName = testService.getPerson();
    }]);
});
