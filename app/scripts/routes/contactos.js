var Contacto = angular.module('desktopApp', ['ngRoute'])

Contacto.config(function($routeProvider) {
	$routeProvider
		.when('/contactos', {
      templateUrl: 'views/contactos.html',
      controller: 'ContactosCtrl'
    })

	//rutas reales
	$routeProvider
		.when('/abogado', {
      templateUrl: 'views/Abogado/index.html',
      controller: ''
    })

	$routeProvider
		.when('/secretaria', {
      templateUrl: 'views/Secretaria/index.html',
      controller: ''
    })	
});