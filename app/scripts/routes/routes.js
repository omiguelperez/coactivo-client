
App.config(function($routeProvider,$stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/login");

	$stateProvider
	.state('login', {
        url: "/login",
		templateUrl: "views/temp_login.html",
        controller: 'LoginController'
    })

    .state('Lider', {
        url: "/Lider",
        templateUrl: "views/Lider/index.html",
        controller: 'IndexController'
    })

    .state('Abogado', {
        url: "/Abogado",
        templateUrl: "views/Abogado/index.html",
        controller: 'IndexController'
    })
    .state('Abogado.Radicar', {
        url: "/Radicar",
        views:{
            "MainView@Abogado":{
                 templateUrl: "views/Abogado/radicar.html",
                 controller: 'RadicarController'
            }
        } 
    })
    .state('Abogado.ConfirmarRadicacion', {
        url: "/ConfirmarRadicacion",
        views:{
            "MainView@Abogado":{
                 templateUrl: 'views/Abogado/ConfirmRadica.html',
				controller: 'ConfirmRadicaController'
            }
        } 
    })
    .state('Abogado.RadicacionMagnetica', {
        url: "/RadicacionMagnetica",
        views:{
            "MainView@Abogado":{
                templateUrl: 'views/Abogado/radica_magnetica.html',
				controller: 'RadicaMagneticaController'
            }
        } 
    })
    .state('Abogado.RadicarDocumento', {
        url: "/RadicarDocumento",
        views:{
            "MainView@Abogado":{
                templateUrl: 'views/Abogado/radicar_documento.html',
      			controller: 'RadicarDocumentoController'
            }
        } 
    })
    .state('Abogado.DocumentoConstancia', {
        url: "/DocumentoConstancia",
        views:{
            "MainView@Abogado":{
                templateUrl: 'views/Secretaria/documento_constancia.html',
 			    controller: 'DocumentoConstanciaController'
            }
        } 
    })
    .state('Abogado.EditarRadicarDocumento', {
        url: "/EditarRadicarDocumento",
        views:{
            "MainView@Abogado":{
                templateUrl: 'views/Abogado/editar_radicar_documento.html',
      			controller: 'EditarRadicarDocumentoController'
            }
        } 
    })


    .state('Secretaria', {
        url: "/Secretaria",
        templateUrl: "views/Secretaria/index.html",
        controller: 'IndexController'
    })
    .state('Secretaria.RegistarCartera', {
        url: "/RegCartera",
        views:{
            "MainView@Secretaria":{
                 templateUrl: "views/Secretaria/RegCartera.html",
                 controller: 'RegCarteraController'
            }
        } 
    })
    .state('Secretaria.RegistarCartera_P1', {
        url: "/RegCartera/Paso1",
        views:{
            "MainView@Secretaria":{
                 templateUrl: "views/Secretaria/RegCartera_Paso_1.html",
                 controller: 'RegCarteraController'
            }
        } 
    })
    .state('Secretaria.RegistarCartera_P2', {
        url: "/RegCartera/Paso2",
        views:{
            "MainView@Secretaria":{
                 templateUrl: "views/Secretaria/RegCartera_Paso_2.html",
                 controller: 'RegCarteraController'
            }
        } 
    });
});