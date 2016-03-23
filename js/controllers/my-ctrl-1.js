define(['test','./module'], function (test,controllers) {
    'use strict';
    controllers.controller('MyCtrl1', ['$scope', function ($scope) {
      $scope.student ={
          firstName:"尼古拉斯",
          lastName:"赵四",
          fullName:function(){
              var studentObj;
              studentObj = $scope.student;
              return studentObj.firstName+'.'+studentObj.lastName;
          }
      };
        $scope.num1=12;
        $scope.num2=25;
        $scope.str = "你好!";
        $scope.toSum= function(num1,num2){
            return num1+num2;
        };
        $scope.pop = function(){
          alert("真的么？")
        };
    }]);
    return controllers;
});

