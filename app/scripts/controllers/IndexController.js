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
	    //Here your view content is fully loaded !
	    $('input.autocomplete').autocomplete({
	    		data: {
	    			"Colombia": null,
	    			"Estados Unidos": null,
	    			"España": null
          //"España": 'http://placehold.it/250x250'
      		},
	        limit: 5, // The max amount of results that can be shown at once. Default: Infinity.
	        onAutocomplete: function(val) {
	          // Callback function when value is autcompleted.
	      },
	        minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
	    });
	    	$(".button-collapse").sideNav({closeOnClick: true});
	    	$('select').material_select();
	    	$('.datepicker').pickadate({
		    selectMonths: true, // Creates a dropdown to control month
		    selectYears: 15 // Creates a dropdown of 15 years to control year
		});
	    	$('.modal').modal();
	});
});