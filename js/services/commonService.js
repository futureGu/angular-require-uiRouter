/**
 * Created by gukui on 2016/3/23.
 */
/**
 *  此模块为服务模块，新增服务均
 *  可参照此格式，$rootScope
 * Created by gukui on 2016/3/22.
 */
define(['./module'], function (services) {
    'use strict';
    services.service('commonService', ['$rootScope', function ($rootScope) {
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
        return service;
    }]);
});
