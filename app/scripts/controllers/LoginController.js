'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
App.controller('LoginController', function ($scope, $localStorage,$location, AuthenticationService) {
    $scope.username;
    $scope.password;

	initController();

    function initController() {
        if ($localStorage.currentUser) {
            $location.path("/"+$localStorage.currentUser.username);
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