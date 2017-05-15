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
            $location.path("/"+$sessionStorage.currentUser.rolename);
        }
    };
    var value;
    $scope.login = function() {
        $scope.error = false;
        AuthenticationService.Login($scope.username, $scope.password)
        .then(function(successCallback) {
         if (successCallback.status == 200) {
            $sessionStorage.currentUser = { rolename: successCallback.data.roles.split(";")[0], token: successCallback.data.access_token,persona:successCallback.data.persona };
            $location.path("/"+$sessionStorage.currentUser.rolename);
         }
        }, function(errorCallback){
            if (errorCallback.status == 400) {
                $scope.msg = errorCallback.data.error_description;
                $scope.error = true;
            }
 });

    };
});