
angular.module('desktopApp', ['ngRoute']).config(function($routeProvider) {

	$routeProvider
	.when('/RegistarCartera', {
		templateUrl: 'views/Secretaria/RegCartera.html',
		controller: 'RegCarteraController'
	})
	.when('/Radicar', {
		templateUrl: 'views/Abogado/radicar.html',
		controller: 'RadicarController'
	})
	.when('/ConfirmarRadicacion', {
		templateUrl: 'views/Abogado/ConfirmRadica.html',
		controller: 'ConfirmRadicaController'
	})
	.when('/RadicacionMagnetica', {
		templateUrl: 'views/Abogado/radica_magnetica.html',
		controller: 'RadicaMagneticaController'
	});

})