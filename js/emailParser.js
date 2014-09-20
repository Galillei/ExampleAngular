define([
    'angular',
    'angular-route',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (angular) {
    'use strict';

    return angular.module('emailParser', ['app.controllers',
            'app.directives',
            'app.filters',
            'app.services',
            'ngRoute'])
        .config(['$interpolateProvider',
            function($interpolateProvider) {
        }])
        .factory('emailParser',['$interpolate',function($interpolate){
            return{
                parse:function(text,context){
                    var template = $interpolate(text);
                    return template(context);
                }
            }
        }])
});