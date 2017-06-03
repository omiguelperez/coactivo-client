'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
 App.controller('RegistrarUsers', function ($scope, $timeout, $location, MiServicio,datepicker,Validaciones, TemporalData,$sessionStorage) {

    $('#cmbNacionalidad').change(function(){
        var pais=$.trim($("#cmbNacionalidad option:selected").text());
        $("#inputNac").val(pais);
        $scope.Nuevo.Persona.Nacionalidad=pais;
        Materialize.updateTextFields();
    });
    $('#cmbPaisCorrespondencia').change(function(){
        var texto=$.trim($("#cmbPaisCorrespondencia option:selected").text());
        $("#inputPaisCorr").val(texto);
        $scope.Nuevo.Persona.PaisCorrespondencia=texto;
        Materialize.updateTextFields();
    });
    $('#cmbPaisNacimiento').change(function(){
        var texto=$.trim($("#cmbPaisNacimiento option:selected").text());
        $("#inputPaisNaci").val(texto);
        $scope.Nuevo.Persona.PaisNacimiento=texto;
        ObtenerDepartamentosPorPais($(this).val());
        Materialize.updateTextFields();
    });
    $('#cmbDepartamento').change(function(){
        var texto=$.trim($("#cmbDepartamento option:selected").text());
        $("#inputDepartamentoNaci").val(texto);
        $scope.Nuevo.Persona.Departamento=texto;
        ObtenerMunicipiosPorDepartamento($(this).val());
        Materialize.updateTextFields();
    });
    $('#cmbMunicipio').change(function(){
        var texto=$.trim($("#cmbMunicipio option:selected").text());
        $("#inputMunicipioNaci").val(texto);
        Materialize.updateTextFields();
    });
function iniController(){
    $("#Cargando").hide();
    $scope.NumeroExpediente="5";
    ReiniciarCampos();
}

function ReiniciarCampos(){
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
            MunicipioId: 68020,
            PaisId: 1,
            FechaNacimiento:"",
            TipoPersonaId: 1,
            Telefono:"",
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
    MiServicio.ObtenerRolesByLider($scope.session)
    .then(function(successCallback) { 
        $scope.listadoRoles = successCallback.data;  
    }, function(errorCallback){
        console.log(errorCallback);
    });
    setTimeout(function() {$('select').material_select();}, 1500);
}

function ObtenerPaises() {
    MiServicio.ObtenerPaises()
    .then(function(successCallback) {  
        var datos = successCallback.data;
        ObtenerDepartamentosPorPais(datos[0].paisId);
        $scope.Nuevo.Persona.Nacionalidad=datos[0].nombre;
        $scope.Nuevo.Persona.PaisCorrespondencia=datos[0].nombre;
        $scope.Nuevo.Persona.PaisNacimiento=datos[0].nombre;
        Materialize.updateTextFields();
        $scope.listadoPaises = datos; 
    }, function(errorCallback){
        console.log(errorCallback);
    });  
    setTimeout(function() {$('select').material_select();}, 500);
}

function ObtenerDepartamentosPorPais(IdPais) {
    MiServicio.ObtenerDepartamentosByIdPais(IdPais)
    .then(function(successCallback) { 
        var datos = successCallback.data;
        ObtenerMunicipiosPorDepartamento(datos[0].departamentoId);
        $scope.Nuevo.Persona.Departamento=datos[0].nombre;
        Materialize.updateTextFields();
        $scope.listadoDepartamentos = datos;  
    }, function(errorCallback){
        console.log(errorCallback);
    });  
    setTimeout(function() {$('select').material_select();}, 500);
}

function ObtenerMunicipiosPorDepartamento(IdDepartamento) {
    MiServicio.ObtenerMunicipiosByIdDepartamento(IdDepartamento)
    .then(function(successCallback) {
        var datos = successCallback.data;
        $scope.Nuevo.Persona.MunicipioId=datos[0].municipioId;
        Materialize.updateTextFields();
        $scope.listadoMunicipios = datos; 
    }, function(errorCallback){
        console.log(errorCallback);
    });  
    setTimeout(function() {$('select').material_select();}, 500);
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
  ObtenerPaises();

  $("#inputNacimiento").change(function() {
    $scope.Nuevo.Persona.FechaNacimiento = datepicker.conversor(document.getElementById('inputNacimiento').value);
  });

$scope.clickRegistrarUsuario = function() {

    $scope.Nuevo.Persona.Sexo = $("#cmbSexo").val();
    $scope.Nuevo.CreateUserBindingModel.RoleName = $("#cmbRol").val();
    $scope.Nuevo.Persona.MunicipioId=$("#cmbMunicipio").val();
    $scope.Nuevo.Persona.PaisId=$("#cmbPaisNacimiento").val();
    var arrayValidate = [{id:"radioNatural",value:$scope.Nuevo.Persona.TipoPersonaId},
    {id:"inputidentificacion",value:$scope.Nuevo.Persona.Identificacion},
    {id:"inputNombres",value:$scope.Nuevo.Persona.Nombres},
    {id:"inputpApellido",value:$scope.Nuevo.Persona.Apellidos},
    {id:"cmbSexo",value:$scope.Nuevo.Persona.Sexo},
    //{id:"inputNac",value:$scope.Nuevo.Persona.Nacionalidad},
    {id:"inputNacimiento",value:$scope.Nuevo.Persona.FechaNacimiento},
    //{id:"inputPaisNaci",value:$scope.Nuevo.Persona.PaisNacimiento},
    //{id:"inputDepartamentoNaci",value:$scope.Nuevo.Persona.Departamento},
    //{id:"inputMunicipioNaci",value:$scope.Nuevo.Persona.Municipio},
    {id:"inputDireccion",value:$scope.Nuevo.Persona.Direccion},
    //{id:"inputPaisCorr",value:$scope.Nuevo.Persona.PaisCorrespondencia},
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
            resp = Validaciones.FechaNacimiento([arrayValidate[5]]);
            if (!resp.status) {
                Mensaje(resp.msg,3000,'red rounded',resp.id);
            }else{
                var resp = Validaciones.FechaLimite([arrayValidate[5]]);
                if (!resp.status) {
                    Mensaje(resp.msg,3000,'red rounded',resp.id);
                }else{
                    $("#Cargando").show();
                    MiServicio.RegistrarUsuarioByLider($scope.Nuevo)
                    .then(function(successCallback) {
                        $("#Cargando").hide();  
                        console.log(successCallback); 
                        if (successCallback.data.url!=="undefined") {
                            Mensaje("Usuario Registrado Correctamente",3000,'green rounded');
                            ReiniciarCampos();
                            // callback(!false,"Usuario Registrado Correctamente");
                        }else{
                            Mensaje(successCallback.data.mensaje,3000,'red rounded');
                            // callback(!successCallback.data.error,successCallback.data.mensaje);
                        }
                    }, function(errorCallback){
                        $("#Cargando").hide();
                        if (errorCallback.status == 400) {
                            Mensaje(errorCallback.data.modelState[""][0],3000,'red rounded');
                            // callback(false,errorCallback.data.modelState[""][0]);
                        }else  if (errorCallback.status == 500) {
                            Mensaje(errorCallback.data.message+" - "+errorCallback.data.exceptionMessage,3000,'red rounded');
                            // callback(false,errorCallback.data.message+" - "+errorCallback.data.exceptionMessage);   
                        }else  if (errorCallback.status == 401) {
                            Mensaje(errorCallback.data.message,3000,'red rounded');
                            // callback(false,errorCallback.data.message);   
                        }else  if (errorCallback.status == 409) {
                            Mensaje("La Persona Ya Existe, Por Favor Verifique",3000,'red rounded');
                            // callback(false,"LA Persona Ya Existe, Por Favor Verifique");   
                        }
                    });
                }
            }
        }
    }
}

function Mensaje(msg,time,style) {
    Materialize.toast("<span id='msgRta'>"+msg+"</span>", time, style);
}

function Mensaje(msg,time,style,id) {
    $("#"+id).focus();
    Materialize.toast("<span id='msgRta'>"+msg+"</span>", time, style);
}


});
