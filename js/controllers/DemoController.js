define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('DemoController', ['$scope', '$filter',function ($scope,$filter) {
        $scope.name = $filter('lowercase')('Ari');
    }]);
});
