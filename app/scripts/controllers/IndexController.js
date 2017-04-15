'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp').controller('IndexController', function ($scope) {
	
	$scope.$on('$viewContentLoaded', function(){
	    //Here your view content is fully loaded !!
	    $('select').material_select();
		$('.datepicker').pickadate({
		    selectMonths: true, // Creates a dropdown to control month
		    selectYears: 15 // Creates a dropdown of 15 years to control year
		  });
		$('.modal').modal();
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
	  });

});