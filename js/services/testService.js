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
            data1: 120,
            person: [
                {name: "姚云", gender: "男", team: "做市商"},
                {name: "顾魁", gender: "男", team: "做市商"},
                {name: "郭俊辉", gender: "男", team: "做市商"},
                {name: "王勇", gender: "男", team: "做市商"},
                {name: "赵金鑫", gender: "男", team: "做市商"},
                {name: "周雷", gender: "男", team: "做市商"},
                {name: "方义", gender: "男", team: "做市商"},
                {name: "王健全", gender: "男", team: "做市商"}
            ],
            naviBar: [
                {
                    "name": "系统设置", "list": [
                    {"name": "系统参数", "url": "#a1"},
                    {"name": "用户权限", "url": "#a2"},
                    {"name": "权限管理", "url": "#a3"}
                ]
                },
                {
                    "name": "产品管理", "list": [
                    {"name": "交易日历", "url": "#a1"},
                    {"name": "交易市场", "url": "#a2"},
                    {"name": "产品管理", "url": "#a3"},
                    {"name": "合约管理", "url": "#a4"}
                ]
                },
                {
                    "name": "账户管理", "list": [
                    {"name": "账户管理", "url": "#a1"},
                    {"name": "资金管理", "url": "#a2"},
                    {"name": "持仓管理", "url": "#a3"},
                    {"name": "账户绩效", "url": "#a3"},
                    {"name": "账户风险", "url": "#a4"}
                ]
                },
                {
                    "name": "策略管理", "list": [
                    {"name": "梯度价差", "url": "#a1"},
                    {"name": "做市策略", "url": "#a2"},
                    {"name": "对冲策略", "url": "#a3"},
                    {"name": "策略开关", "url": "#a3"},
                    {"name": "定价策略", "url": "#a4"},
                    {"name": "策略监控", "url": "#a4"},
                    {"name": "策略回测", "url": "#a4"}
                ]
                }
            ],
            getData: function () {
                return this.data;
            },
            getPerson: function () {
                return this.person;
            },
            getNaviBar: function () {
                return this.naviBar;
            },
        };
        return service;
    }]);
    services.service('commonData', ['$rootScope', function ($rootScope) {
        var service = {
            thisIsPrivate: "Private",
            variable: "This is public",
            getPrivate:function() {
                return this.thisIsPrivate;
            },
            getVariable:function(){
                return this.variable;
            }
        };
        /*var thisIsPrivate = "Private";
         var variable = "This is public";
         getPrivate:function() {
         return this.thisIsPrivate;
         };*/
    }]);
});
