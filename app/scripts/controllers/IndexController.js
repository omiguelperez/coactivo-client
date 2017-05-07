'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
App.controller('IndexController', function ($scope, $location, AuthenticationService,$sessionStorage) {

	initController();

	function initController() {
            var datosbasicos=JSON.parse($sessionStorage.currentUser.persona);
            //datosbasicos.push({"rol":"ss"});
            datosbasicos['Rol'] = $sessionStorage.currentUser.rolename;
            //console.log(datosbasicos);
            $scope.DatosBasicos=datosbasicos;
        }

	$scope.CerrarSesion = function() {
		$('.button-collapse').sideNav('hide');
		AuthenticationService.Logout();
		$location.path("/login");
	}
	
	$scope.$on('$viewContentLoaded', function(){
	    //Here your view content is fully loaded !!
	    $(".button-collapse").sideNav({closeOnClick: true});
	    $('select').material_select();
		$('.datepicker').pickadate({
		    selectMonths: true, // Creates a dropdown to control month
		    selectYears: 15 // Creates a dropdown of 15 years to control year
		  });
		$('.modal').modal();
	  });
});