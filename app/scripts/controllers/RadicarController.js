'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp').controller('RadicarController', function ($scope,MiServicio) {
	
	$scope.datos = MiServicio.get_Radicaciones();

	$scope.modal = function(id_modal) {
		$('#'+id_modal).modal('open');
	}
});