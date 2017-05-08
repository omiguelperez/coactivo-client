'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
 App.controller('RegistrarUsers', function ($scope, $timeout, $location, MiServicio,datepicker,Validaciones, TemporalData,$sessionStorage) {

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

function iniController(){
    $("#Cargando").hide();
    $scope.NumeroExpediente="5";
    $scope.Nuevo = {    
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
        "CreateUserBindingModel":{ 
            UserName:"", 
            Password: "", 
            ConfirmPassword: "", 
            RoleName:""
        }
    };
}

function ObtenerRolesPorLiderAbogado() {
    MiServicio.ObtenerRolesByLider(function(datos) {
        $scope.listadoRoles = datos;
    });
    setTimeout(function() {$('select').material_select();}, 1500);
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

$scope.Mostrar = function() {
    //el simbolo # genera pronblemas
    var aux=$sessionStorage.currentUser.persona+"";
    aux=aux.split("#")[0]+aux.split("#")[1];
    var url_= encodeURI("api_file.html?values="+JSON.stringify(TemporalData.array[0])+"&Secretaria="+aux);
    $('#iframeDoc').attr('src', url_);
    $scope.datos = TemporalData.array[0];
}
  iniController();
  ObtenerRolesPorLiderAbogado();
  //ObtenerTiposObligaciones();

$scope.clickRegistrarUsuario = function() {

    $scope.Nuevo.Persona.Sexo = $("#cmbSexo").val();
    $scope.Nuevo.CreateUserBindingModel.RoleName = $("#cmbRol").val();
    $scope.Nuevo.Persona.FechaNacimiento = datepicker.conversor(document.getElementById('inputNacimiento').value);
    var arrayValidate = [{id:"radioNatural",value:$scope.Nuevo.Persona.TipoPersonaId},
    {id:"inputidentificacion",value:$scope.Nuevo.Persona.Identificacion},
    {id:"inputNombres",value:$scope.Nuevo.Persona.Nombres},
    {id:"inputpApellido",value:$scope.Nuevo.Persona.Apellidos},
    {id:"cmbSexo",value:$scope.Nuevo.Persona.Sexo},
    {id:"inputNac",value:$scope.Nuevo.Persona.Nacionalidad},
    {id:"inputNacimiento",value:$scope.Nuevo.Persona.FechaNacimiento},
    {id:"inputPaisNaci",value:$scope.Nuevo.Persona.PaisNacimiento},
    {id:"inputDepartamentoNaci",value:$scope.Nuevo.Persona.Departamento},
    {id:"inputMunicipioNaci",value:$scope.Nuevo.Persona.Municipio},
    {id:"inputDireccion",value:$scope.Nuevo.Persona.Direccion},
    {id:"inputPaisCorr",value:$scope.Nuevo.Persona.PaisCorrespondencia},
    {id:"inputTelefonoCorr",value:$scope.Nuevo.Persona.Telefono},
    {id:"inputEmailCorr",value:$scope.Nuevo.Persona.Email},
    {id:"inputUsuario",value:$scope.Nuevo.CreateUserBindingModel.UserName},
    {id:"inputPassword",value:$scope.Nuevo.CreateUserBindingModel.Password},
    {id:"inputConfirmPassword",value:$scope.Nuevo.CreateUserBindingModel.ConfirmPassword}];
    console.log(arrayValidate);
    var resp = Validaciones.nulos(arrayValidate);
    if($scope.Nuevo.CreateUserBindingModel.Password!=$scope.Nuevo.CreateUserBindingModel.ConfirmPassword){
        Mensaje("Verifique Contraseñas, No Coinciden",3000,'red rounded',resp.id);
    }else{
        if (!resp.status) {
            Mensaje(resp.msg,3000,'red rounded',resp.id);
        }else{
            resp = Validaciones.FechaNacimiento([arrayValidate[6]]);
            if (!resp.status) {
                Mensaje(resp.msg,3000,'red rounded',resp.id);
            }else{
                var resp = Validaciones.FechaLimite([arrayValidate[6]]);
                if (!resp.status) {
                    Mensaje(resp.msg,3000,'red rounded',resp.id);
                }else{
                    $("#Cargando").show();
                    MiServicio.RegistrarUsuarioByLider($scope.Nuevo,function(resp_,msg) {
                        $("#Cargando").hide();
                        if (resp_) {
                            Mensaje(msg,3000,'green rounded');
                            $location.path('/Lider');
                        }else{
                            Mensaje(msg,3000,'red rounded');
                        }
                    });
                }
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
