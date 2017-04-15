'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp').controller('RadicaMagneticaController', function ($scope,MiServicio) {

	$scope.datos = MiServicio.get_Radicaciones();
	
});