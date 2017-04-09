var Contacto = angular.module('desktopApp', ['ngRoute'])

Contacto.config(function($routeProvider) {
	$routeProvider
		.when('/contactos', {
      templateUrl: 'views/contactos.html',
      controller: 'ContactosCtrl'
    })
});