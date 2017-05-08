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
    MiServicio.ObtenerRolesByLider(function(datos) {
        $scope.listadoRoles = datos;
    });
    setTimeout(function() {$('select').material_select();}, 1500);
}

function ObtenerPaises() {
    MiServicio.ObtenerPaises(function(datos) {
        ObtenerDepartamentosPorPais(datos[0].paisId);
        $scope.Nuevo.Persona.Nacionalidad=datos[0].nombre;
        $scope.Nuevo.Persona.PaisCorrespondencia=datos[0].nombre;
        $scope.Nuevo.Persona.PaisNacimiento=datos[0].nombre;
        Materialize.updateTextFields();
        $scope.listadoPaises = datos;
    });  
    setTimeout(function() {$('select').material_select();}, 500);
}

function ObtenerDepartamentosPorPais(IdPais) {
    MiServicio.ObtenerDepartamentosByIdPais(IdPais,function(datos) {
        ObtenerMunicipiosPorDepartamento(datos[0].departamentoId);
        $scope.Nuevo.Persona.Departamento=datos[0].nombre;
        Materialize.updateTextFields();
        $scope.listadoDepartamentos = datos;
    });  
    setTimeout(function() {$('select').material_select();}, 500);
}

function ObtenerMunicipiosPorDepartamento(IdDepartamento) {
    MiServicio.ObtenerMunicipiosByIdDepartamento(IdDepartamento,function(datos) {
        $scope.Nuevo.Persona.MunicipioId=datos[0].municipioId;
        Materialize.updateTextFields();
        $scope.listadoMunicipios = datos;
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

$scope.clickRegistrarUsuario = function() {

    $scope.Nuevo.Persona.Sexo = $("#cmbSexo").val();
    $scope.Nuevo.CreateUserBindingModel.RoleName = $("#cmbRol").val();
    $scope.Nuevo.Persona.MunicipioId=$("#cmbMunicipio").val();
    $scope.Nuevo.Persona.PaisId=$("#cmbPaisNacimiento").val();
    $scope.Nuevo.Persona.FechaNacimiento = datepicker.conversor(document.getElementById('inputNacimiento').value);
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
                    MiServicio.RegistrarUsuarioByLider($scope.Nuevo,function(resp_,msg) {
                        $("#Cargando").hide();
                        if (resp_) {
                            Mensaje(msg,3000,'green rounded');
                            ReiniciarCampos();
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
