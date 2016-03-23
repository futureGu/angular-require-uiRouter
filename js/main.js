/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'domReady': '../lib/requirejs-domready/domReady',
        'angular': '../lib/angular/angular',
        "ng-chart":'../lib/angular/angular-chart',
        "chart":'../lib/angular/Chart',
        "uiRouter": "../lib/angular/angular-ui-router",
        "jquery":"./commonJS/jquery-2.2.2",
        "class":'./commonJS/class',
        "student":'./commonJS/student',
        "test":"./commonJS/test",
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter':{
            deps: ['angular']
        },
        'ng-chart':{
            deps:['angular','chart']
        }
    },
    
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
