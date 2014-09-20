define(['./module', '../emailParser'], function (controllers) {
    'use strict';
    controllers.controller('myController',
        ['$scope', 'emailParser',
            function($scope, emailParser) {
                $scope.to = 'ari@fullstack.io';
                $scope.emailBody = 'Hello __to__';

                // Set up a watch

                $scope.$watch('emailBody', function(body) {
                    if (body) {
                        $scope.previewText =
                            emailParser.parse(body, {
                                to: $scope.to
                            });
                    }
                });
            }])
}
    )