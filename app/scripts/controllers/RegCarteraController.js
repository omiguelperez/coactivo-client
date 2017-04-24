'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
App.controller('RegCarteraController', function ($scope, $timeout, $route, MiServicio,datepicker) {

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
	
	// $scope.thumbnail = [];
 //  // Read the image using the filereader 
 //  $scope.fileReaderSupported = window.FileReader != null;

	$scope.Nuevo = {
    Cuantia:"",
    Descripcion:"",
    DireccionEjecutado:"",
    DireccionTituloEjecutivo:"",
    EntidadEncargada:"",
    FechaRadicacion:"",
    Identificacion:"",
    NaturalezaObligacion:"",
    Nombre:"",
    UbicacionExpediente:"",
    Obligacion:{
        Cuantia:"",
        Deuda:"",
        Estado:"",
        FechaPreinscripcion:"",
        TipoObligacionId:"",
        Persona:{
            Apellidos:"",
            Direccion:"",
            Identificacion:"",
            Nombres:"",
            Sexo:"",
            Email:"",
            Nacionalidad:"",
            PaisNacimiento:"",
            PaisCorrespondencia:"",
            Departamento:"",
            Municipio:"",
            TipoPersonaId:"",
            Telefono:"",
        }
    }
  };

  

	$scope.registar = function() {
    
    $scope.Nuevo.Cuantia = $scope.Nuevo.Obligacion.Cuantia;
	$scope.Nuevo.Obligacion.Persona.Sexo = $("#cmbSexo").val();
    $scope.Nuevo.Identificacion = $scope.Nuevo.Obligacion.Persona.Identificacion;
    $scope.Nuevo.Nombre = $scope.Nuevo.Obligacion.Persona.Nombres;
    
    $scope.Nuevo.Obligacion.FechaPreinscripcion = datepicker.conversor(angular.element('#inputFechaPreins').val());
    
    $scope.Nuevo.FechaRadicacion = datepicker.conversor(angular.element('#inputFechaRadi').val());
    
    console.log($scope.Nuevo);

    console.log(MiServicio.Registar($scope.Nuevo));
		
    //$scope.msg = MiServicio.Registar($scope.Nuevo);

    //Materialize.toast($scope.msg.mensaje, 2000, $scope.msg.color,function(){if($scope.msg.estado){$route.reload()}});
    
    
	}
});
