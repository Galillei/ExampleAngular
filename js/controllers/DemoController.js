define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('DemoController', ['$scope',function ($scope) {
        $scope.submitted = false;
        $scope.signupForm = function() {
            if ($scope.signup_form.$valid) {
                // Submit as normal
            } else {
                $scope.signup_form.submitted = true;
            }
        }
    }]);
});
