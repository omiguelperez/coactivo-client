'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
App.controller('RadicaMagneticaController', function ($scope,MiServicio) {

	$scope.datos = MiServicio.get_Radicaciones();
	
});