'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
App.controller('LoginController', function ($scope, $sessionStorage,$location, AuthenticationService) {
    $scope.username;
    $scope.password;

	initController();

    function initController() {
        if ($sessionStorage.currentUser) {
            $location.path("/"+$sessionStorage.currentUser.username);
        }
    };

    $scope.login = function() {
    	$scope.error = false;
        AuthenticationService.Login($scope.username, $scope.password, function(resp,user,msg) {
            if (resp) {
                $location.path("/"+user);
            } else {
                $scope.error = true;
                $scope.msg = msg;
            }   

        });

    };
});