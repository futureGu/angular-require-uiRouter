/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app','jquery','ng-chart'], function(app) {
    'use strict';
    return app.config(function($stateProvider) {
        $stateProvider.state('view1',{
            url: '/view1',
            templateUrl: 'partials/partial1.html',
            controller:'MyCtrl1'
        })
        .state('view2',{
            url: '/view2',
            templateUrl: 'partials/partial2.html',
            controller: 'MyCtrl2'
        });
    })
});