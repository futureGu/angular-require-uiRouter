/**
 *  此模块为服务模块，新增服务均
 *  可参照此格式，$rootScope
 * Created by gukui on 2016/3/22.
 */
define(['./module'], function (services) {
    'use strict';
    services.service('testService', ['$rootScope', function ($rootScope) {
        var service = {
            data: 100,
            data1:120,
            person:[
                {name:"姚云",gender:"男"},
                {name:"顾魁",gender:"男"},
                {name:"郭俊辉",gender:"男"},
                {name:"王勇",gender:"男"},
                {name:"赵金鑫",gender:"男"},
                {name:"周雷",gender:"男"},
                {name:"方义",gender:"男"},
                {name:"王健全",gender:"男"}
            ],
            getData: function () {
                return this.data;
            },
            getPerson:function(){
              return this.person;
            }
        };
        return service;
    }]);
});
