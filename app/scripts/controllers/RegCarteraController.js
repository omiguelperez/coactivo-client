'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
 App.controller('RegCarteraController', function ($scope, $timeout, $location, MiServicio,datepicker,Validaciones, TemporalData,$sessionStorage) {

 

function iniController(){

    $scope.NumeroExpediente="5";
    
    $scope.Nuevo = {
        Cuantia:"", 
        Deuda:"", 
        Estado:"Pendiente",
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
        },
        Expediente:{
            Cuantia:"",
            Descripcion:"",
            DireccionEjecutado:"",
            DireccionTituloEjecutivo:"",
            EntidadEncargada:"",
            FechaRadicacion:"",
            Identificacion:"",
            NaturalezaObligacion:"",
            Nombre:"",
            UbicacionExpediente:""
        }
    };
}

function ObternerObligaciones() {
    MiServicio.ObtenerExpedientes(function(datos) {
        $scope.listadoExpedientes = datos;
    });
}

function ObtenerTiposObligaciones() {
    MiServicio.ObtenerTiposObligaciones(function(datos) {
        $scope.listadoTiposObligaciones = datos;
    });  
    setTimeout(function() {$('select').material_select();}, 2000);
}

$scope.GestionarDocumentosSecretaria=function(dato) {
    TemporalData.vaciar();
    TemporalData.almacenar(dato);
}

$('#cmbSexo').on('change',function() {
    $scope.Nuevo.Persona.Sexo = $("#cmbSexo").val();
});

$('#cmbTipoObligacion').on('change',function() {
    $scope.Nuevo.TipoObligacionId = $("#cmbTipoObligacion").val();
});

$('#inputFechaPreins').on('change',function() {
    $scope.Nuevo.FechaPreinscripcion = datepicker.conversor(document.getElementById('inputFechaPreins').value);
});

$('#inputFechaRadi').on('change',function() {
    $scope.Nuevo.Expediente.FechaRadicacion = datepicker.conversor(document.getElementById('inputFechaRadi').value);
});

$('#inputNacimiento').on('change',function() {
    $scope.Nuevo.Persona.FechaNacimiento = datepicker.conversor(document.getElementById('inputNacimiento').value);
});

$scope.Mostrar = function() {
    //el simbolo # genera pronblemas
    var aux=$sessionStorage.currentUser.persona+"";
    aux=aux.split("#")[0]+aux.split("#")[1];
    var url_= encodeURI("api_file.html?values="+JSON.stringify(TemporalData.array[0])+"&Secretaria="+aux);
    $('#iframeDoc').attr('src', url_);
    $scope.datos = TemporalData.array[0];
}
  iniController();
  ObternerObligaciones();
  ObtenerTiposObligaciones();

$scope.registar = function() {
    console.log($scope.Nuevo);
    $scope.Nuevo.Cuantia = $scope.Nuevo.Deuda;
    $scope.Nuevo.Expediente.Cuantia = $scope.Nuevo.Deuda;
    
    $scope.Nuevo.Expediente.Identificacion = $scope.Nuevo.Persona.Identificacion;
    $scope.Nuevo.Expediente.Nombre = $scope.Nuevo.Persona.Nombres;
    
    var arrayValidate = [{id:"radioNatural",value:$scope.Nuevo.Persona.TipoPersonaId},
    {id:"inputidentificacion",value:$scope.Nuevo.Persona.Identificacion},
    {id:"inputNombres",value:$scope.Nuevo.Persona.Nombres},
    {id:"inputpApellido",value:$scope.Nuevo.Persona.Apellidos},
    {id:"inputNac",value:$scope.Nuevo.Persona.Sexo},
    {id:"inputNac",value:$scope.Nuevo.Persona.Nacionalidad},
    {id:"inputNacimiento",value:$scope.Nuevo.Persona.FechaNacimiento},
    {id:"inputPaisNaci",value:$scope.Nuevo.Persona.PaisNacimiento},
    {id:"inputDepartamentoNaci",value:$scope.Nuevo.Persona.Departamento},
    {id:"inputMunicipioNaci",value:$scope.Nuevo.Persona.Municipio},
    {id:"inputDireccion",value:$scope.Nuevo.Persona.Direccion},
    {id:"inputPaisCorr",value:$scope.Nuevo.Persona.PaisCorrespondencia},
    {id:"inputTelefonoCorr",value:$scope.Nuevo.Persona.Telefono},
    {id:"inputEmailCorr",value:$scope.Nuevo.Persona.Email},
    {id:"textarea1",value:$scope.Nuevo.Expediente.Descripcion},
    {id:"inputDirEjecutado",value:$scope.Nuevo.Expediente.DireccionEjecutado},
    {id:"inputDirTitEje",value:$scope.Nuevo.Expediente.DireccionTituloEjecutivo},
    {id:"inputEntEncar",value:$scope.Nuevo.Expediente.EntidadEncargada},
    {id:"inputFechaRadi",value:$scope.Nuevo.Expediente.FechaRadicacion},
    {id:"inputNatObliga",value:$scope.Nuevo.Expediente.NaturalezaObligacion},
    {id:"inputUbicaExped",value:$scope.Nuevo.Expediente.UbicacionExpediente},
    {id:"inputDeuda",value:$scope.Nuevo.Deuda},
    {id:"inputEstado",value:$scope.Nuevo.Estado},
    {id:"inputFechaPreins",value:$scope.Nuevo.FechaPreinscripcion},
    {id:"inputTipoObliga",value:$scope.Nuevo.TipoObligacionId}];

    $scope.resp = Validaciones.nulos(arrayValidate);
    
    if (!$scope.resp.status) {
        Mensaje($scope.resp.msg,3000,'red rounded',$scope.resp.id);
    }else{
        $scope.resp = Validaciones.FechaNacimiento([arrayValidate[6]]);
        if (!$scope.resp.status) {
            Mensaje($scope.resp.msg,3000,'red rounded',$scope.resp.id);
        }else{
            $scope.resp = Validaciones.FechaLimite([arrayValidate[6],arrayValidate[18],arrayValidate[23]]);
            if (!$scope.resp.status) {
                Mensaje($scope.resp.msg,3000,'red rounded',$scope.resp.id);
            }else{
                console.log($scope.Nuevo);
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
