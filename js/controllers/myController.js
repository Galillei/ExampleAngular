define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('myController', ['$scope',function ($scope) {
            $scope.helloWorld = 'asf';
    }]);
});
