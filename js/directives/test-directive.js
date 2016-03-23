/**
 * Created by gukui on 2016/3/22.
 */
define(['./module'], function (directives) {
    'use strict';
    directives.directive('testDirective', ['testService', function (testService) {
        return {
            restrict: 'EAC',
            template: '<h3 class="alert-danger">这是由指令生成并替换的标签!</h3>',
            replace: true
        };
    }]);
    directives.directive('bDirective', [function () {
        return {
            restrict: 'EAC',
            template: '<h3 class="alert-danger">这是由指令生成未作替换的标签!</h3>'
        }
    }]);
    directives.directive('commitButton', function () {
        return {
            restrict: 'EAC',
            template: '\
            <div>\
            <button class="btn btn-success" data-ng-click="pop()">确认</button>\
            <button class="btn btn-danger">取消</button>\
            </div>'
        }
    });
    directives.directive('naviMenu', function () {
        return {
            restrict: 'EAC',
            template: '\
           <ul class="menu">\
               <button class="btn btn-success">\
               <a ui-sref="view1">视图1</a>\
               </button>\
           <button class="btn btn-success"><a ui-sref="view2">视图2</a></button>\
            </ul>'
        }
    });
    directives.directive('autoNavi',['testService',function(testService){
        return{
            restrict:'EAC',
            controller:function(){
                $scope.naviJson = testService.getNaviBar();
                $scope.naviStr ="";
                $scope.naviStr = "<div>"+"\\";
                var naviTree = function(){
                    for (var i=0;i<naviJson.length;i++){
                        var urlStr ="";
                        if (typeof naviJson[i]["url"] =="undefined"){
                            urlStr = "<div><span>"+ naviJson[i]["name"] +"</span><ul>";
                        }else{
                            urlStr = "<div><span><a href="+ naviJson[i]["url"] +">"+ naviJson[i]["name"] +"</a></span><ul>";
                        }
                        $scope.naviStr += urlstr;
                        if(naviJson[i]["list"] != null){
                            naviTree(naviJson[i]["list"]);
                        }
                        $scope.naviStr += "</ul></div>";
                    }
                    $scope.naviStr =$scope.naviStr+"\\"+"</div>";
                    return $scope.naviStr;
                };
                console.log(naviTree());
                return naviTree();
            },
            template:'<div>\
            <span>{{naviMenu}}</span>\
            </div>',
            replace:true
        }
    }]);
});
