'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
App.controller('IndexController', function ($scope, $location, AuthenticationService) {

	initController();

	function initController() {

    }

	$scope.CerrarSesion = function() {
		AuthenticationService.Logout();
		$location.path("/login");
	}
	
	$scope.$on('$viewContentLoaded', function(){
	    //Here your view content is fully loaded !!
	    $('select').material_select();
		$('.datepicker').pickadate({
		    selectMonths: true, // Creates a dropdown to control month
		    selectYears: 15 // Creates a dropdown of 15 years to control year
		  });
		$('.modal').modal();
	  });
});