'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
 App.controller('RegCarteraController', function ($scope, $timeout, $location, MiServicio,datepicker,Validaciones) {

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

  iniController();


  function iniController(){
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
}

$scope.registar = function() {

    $scope.Nuevo.Cuantia = $scope.Nuevo.Obligacion.Deuda;
    $scope.Nuevo.Obligacion.Cuantia = $scope.Nuevo.Obligacion.Deuda;
    $scope.Nuevo.Obligacion.Persona.Sexo = $("#cmbSexo").val();
    $scope.Nuevo.Identificacion = $scope.Nuevo.Obligacion.Persona.Identificacion;
    $scope.Nuevo.Nombre = $scope.Nuevo.Obligacion.Persona.Nombres;
    $scope.Nuevo.Obligacion.FechaPreinscripcion = datepicker.conversor(document.getElementById('inputFechaPreins').value);
    
    $scope.Nuevo.FechaRadicacion = datepicker.conversor(document.getElementById('inputFechaRadi').value);

    $scope.Nuevo.Obligacion.Persona.FechaNacimiento = datepicker.conversor(document.getElementById('inputNacimiento').value);
    
    console.log($scope.Nuevo);

    var arrayValidate = [{id:"radioNatural",value:$scope.Nuevo.Obligacion.Persona.TipoPersonaId},
    {id:"inputidentificacion",value:$scope.Nuevo.Obligacion.Persona.Identificacion},
    {id:"inputNombres",value:$scope.Nuevo.Obligacion.Persona.Nombres},
    {id:"inputpApellido",value:$scope.Nuevo.Obligacion.Persona.Apellidos},
    {id:"inputNac",value:$scope.Nuevo.Obligacion.Persona.Sexo},
    {id:"inputNac",value:$scope.Nuevo.Obligacion.Persona.Nacionalidad},
    {id:"inputNacimiento",value:$scope.Nuevo.Obligacion.Persona.FechaNacimiento},
    {id:"inputPaisNaci",value:$scope.Nuevo.Obligacion.Persona.PaisNacimiento},
    {id:"inputDepartamentoNaci",value:$scope.Nuevo.Obligacion.Persona.Departamento},
    {id:"inputMunicipioNaci",value:$scope.Nuevo.Obligacion.Persona.Municipio},
    {id:"inputDireccion",value:$scope.Nuevo.Obligacion.Persona.Direccion},
    {id:"inputPaisCorr",value:$scope.Nuevo.Obligacion.Persona.PaisCorrespondencia},
    {id:"inputTelefonoCorr",value:$scope.Nuevo.Obligacion.Persona.Telefono},
    {id:"inputEmailCorr",value:$scope.Nuevo.Obligacion.Persona.Email},
    {id:"textarea1",value:$scope.Nuevo.Descripcion},
    {id:"inputDirEjecutado",value:$scope.Nuevo.DireccionEjecutado},
    {id:"inputDirTitEje",value:$scope.Nuevo.DireccionTituloEjecutivo},
    {id:"inputEntEncar",value:$scope.Nuevo.EntidadEncargada},
    {id:"inputFechaRadi",value:$scope.Nuevo.FechaRadicacion},
    {id:"inputNatObliga",value:$scope.Nuevo.NaturalezaObligacion},
    {id:"inputUbicaExped",value:$scope.Nuevo.UbicacionExpediente},
    {id:"inputDeuda",value:$scope.Nuevo.Obligacion.Deuda},
    {id:"inputEstado",value:$scope.Nuevo.Obligacion.Estado},
    {id:"inputFechaPreins",value:$scope.Nuevo.Obligacion.FechaPreinscripcion},
    {id:"inputTipoObliga",value:$scope.Nuevo.Obligacion.TipoObligacionId}];
    var resp = Validaciones.nulos(arrayValidate);
    if (!resp.status) {
        Mensaje(resp.msg,3000,'red rounded',resp.id);
    }else{
        resp = Validaciones.FechaNacimiento([arrayValidate[6]]);
        if (!resp.status) {
            Mensaje(resp.msg,3000,'red rounded',resp.id);
        }else{
            var resp = Validaciones.FechaLimite([arrayValidate[6],arrayValidate[18],arrayValidate[23]]);
            if (!resp.status) {
                Mensaje(resp.msg,3000,'red rounded',resp.id);
            }else{
                console.log('entro');
                MiServicio.Registar($scope.Nuevo,function(resp_,msg) {
                    if (resp_) {
                        Mensaje(msg,3000,'green rounded');
                        $location.path('/Secretaria/RegCartera');
                    }else{
                        Mensaje(msg,3000,'red rounded');
                    }
                });
            }
        }
    }

}

function Mensaje(msg,time,style) {
    Materialize.toast(msg, time, style);
}

function Mensaje(msg,time,style,id) {
    $("#"+id).focus();
    Materialize.toast(msg, time, style);
}

});
