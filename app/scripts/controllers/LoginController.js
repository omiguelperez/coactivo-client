'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module(App).controller('LoginController', function ($scope, $localStorage, $location, AuthenticationService) {

	initController();

    function initController() {
        // reset login status
        console.log(AuthenticationService.SesionActiva());
    };

    $scope.login = function() {
    	$scope.error = false;
        AuthenticationService.Login($scope.username, $scope.password, function(resp) {

        });
    };
});