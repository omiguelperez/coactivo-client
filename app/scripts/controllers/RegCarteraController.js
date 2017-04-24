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
            FechaNacimiento:"",
        }
    }
  };

  

	$scope.registar = function() {
    
    $scope.Nuevo.Cuantia = $scope.Nuevo.Obligacion.Cuantia;
	$scope.Nuevo.Obligacion.Persona.Sexo = $("#cmbSexo").val();
    $scope.Nuevo.Identificacion = $scope.Nuevo.Obligacion.Persona.Identificacion;
    $scope.Nuevo.Nombre = $scope.Nuevo.Obligacion.Persona.Nombres;
    $scope.Nuevo.Obligacion.FechaPreinscripcion = datepicker.conversor(document.getElementById('inputFechaPreins').value);
    
    $scope.Nuevo.FechaRadicacion = datepicker.conversor(document.getElementById('inputFechaRadi').value);

    $scope.Nuevo.Obligacion.Persona.FechaNacimiento = datepicker.conversor(document.getElementById('inputNacimiento').value);
    
    console.log($scope.Nuevo);

    MiServicio.Registar($scope.Nuevo,function(resp,msg) {
        if (resp) {
            Materialize.toast(msg, 2000, 'green rounded',function(){window.location = "/#!/Secretaria/RegCartera/Paso1"});
        }else{
            Materialize.toast(msg, 3000, 'red rounded');
        }
    });
    
	}
});
