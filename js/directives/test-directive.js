/**
 * Created by gukui on 2016/3/22.
 */
define(['./module'], function (directives) {
    'use strict';
    directives.directive('testDirective', ['testService', function (testService) {
        return {
            restrict: 'EAC',
            template: '<h3 class="alert-danger">你好！这是由指令生成并替换的标签!</h3>',
            replace:true
        };
    }]);
    directives.directive('bDirective',[function(){
        return{
            restrict:'EAC',
            template:'<h3 class="alert-danger">你好！这是由指令生成未作替换的标签!</h3>'
        }
    }]);
});
