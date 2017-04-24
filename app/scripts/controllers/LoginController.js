'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
App.controller('LoginController', function ($scope, $location, AuthenticationService) {
    
	initController();

    function initController() {

    };

    $scope.login = function() {
    	$scope.error = false;
        console.log($scope.username+" "+ $scope.password);
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