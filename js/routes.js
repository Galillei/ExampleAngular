/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'partials/partial1.html',
            controller: 'MyCtrl1'
        });

        $routeProvider.when('/view2', {
            templateUrl: 'partials/partial2.html',
            controller: 'MyCtrl2'
        });
        $routeProvider.when('/example',{
            templateUrl:'partials/example.html',
            controller: 'myController'
        });
        $routeProvider.when('/demo',{
            templateUrl:'partials/demo.html',
            controller: 'DemoController'
        });
        $routeProvider.when('/form',{
            templateUrl:'partials/form.html',
            controller: 'DemoController'
        })

        $routeProvider.otherwise({
            redirectTo: '/view1'
        });
    }]);
});
