'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
App.controller('LoginController', function ($scope, AuthenticationService) {
    
	initController();

    function initController() {
        // if (AuthenticationService.SesionActiva()){
        //     $scope.mirror = true;
        // };
    };

    $scope.login = function() {
    	$scope.error = false;
        AuthenticationService.Login($scope.username, $scope.password, function(resp) {
            if (resp) {
                window.location = "/";
            } else {
                $scope.error = true;
            }   

        });

    };
});