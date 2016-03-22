define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl2', ['$scope', function ($scope) {
        console.log(5);
        $scope.a = 5;
        $scope.s = "你好！"
    }]);
});
