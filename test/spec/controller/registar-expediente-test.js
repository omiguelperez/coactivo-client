describe('Pruebas unitarias para registro de expediente', function() {
  var $controller, $scope, $rootScope;

  beforeEach(function() {
    module('desktopApp');

    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')("RegCarteraController", {$scope: $scope});
    });
  });

  it('Registro un dato de tipo incorrecto', function() {
    $scope.Nuevo = {
      Cuantia:"10000", 
      Deuda:"10000", 
      Estado:"Pendiente",
      FechaPreinscripcion:"2017-05-01",
      TipoObligacionId:"1",      
      Persona:{
        Apellidos:"",//este
        Direccion:"Carrera 15 #13 bbis 21",
        Identificacion:"1065823365",
        Nombres:"Sebastian",
        Sexo:"M",
        Email:"s@g.co",
        Nacionalidad:"Colombia",
        PaisNacimiento:"Colombia",
        PaisCorrespondencia:"Colombia",
        Departamento:"La Guajira",
        MunicipioId: "1",
        PaisId: "1",
        FechaNacimiento:"1996-03-17",
        TipoPersonaId: "1",
        Telefono:"31264573",
      },
      Expediente:{
        Cuantia:"10000",
        Descripcion:"descripcion",
        DireccionEjecutado:"direccion eje",
        DireccionTituloEjecutivo:"direccion titu",
        EntidadEncargada:"Entidad encargada",
        FechaRadicacion:"2017-05-10",
        Identificacion:"1065823365",
        NaturalezaObligacion:"naturaleza",
        Nombre:"Sebastian",
        UbicacionExpediente:"en lote tal"
      }
    };

    $scope.registar();
    console.log($scope.resp.msg);
    expect('Tiene un campo Incorrecto').toEqual($scope.resp.msg);
  });

  it('Registro fecha por encima de la actual', function() {
    $scope.Nuevo = {
      Cuantia:10000, 
      Deuda:10000, 
      Estado:"Pendiente",
      FechaPreinscripcion:"2017-05-01",
      TipoObligacionId:"2",      
      Persona:{
        Apellidos:"Gonzalez Morales",
        Direccion:"Carrera 15 #13 bbis 21",
        Identificacion:1065823365,
        Nombres:"Sebastian",
        Sexo:"M",
        Email:"s@g.co",
        Nacionalidad:"Colombia",
        PaisNacimiento:"Colombia",
        PaisCorrespondencia:"Colombia",
        Departamento:"La Guajira",
        MunicipioId: "1",
        PaisId: 1,
        FechaNacimiento:"1996-03-17",
        TipoPersonaId: "1",
        Telefono:31264573,
      },
      Expediente:{
        Cuantia:10000,
        Descripcion:"descripcion",
        DireccionEjecutado:"direccion eje",
        DireccionTituloEjecutivo:"direccion titu",
        EntidadEncargada:"Entidad encargada",
        FechaRadicacion:"2018-05-10",//este
        Identificacion:1065823365,
        NaturalezaObligacion:"naturaleza",
        Nombre:"Sebastian",
        UbicacionExpediente:"en lote tal"
      }
    };

    $scope.registar();
    console.log($scope.resp.msg);
    expect('Las fechas no puede ser mayores a la actual').toEqual($scope.resp.msg);
  });

  it('Registro fecha nacimiento de menores de edad', function() {
    $scope.Nuevo = {
      Cuantia:"10000", 
      Deuda:"10000", 
      Estado:"Pendiente",
      FechaPreinscripcion:"2017-05-01",
      TipoObligacionId:"1",      
      Persona:{
        Apellidos:"Gonzalez Morales",
        Direccion:"Carrera 15 #13 bbis 21",
        Identificacion:"1065823365",
        Nombres:"Sebastian",
        Sexo:"M",
        Email:"s@g.co",
        Nacionalidad:"Colombia",
        PaisNacimiento:"Colombia",
        PaisCorrespondencia:"Colombia",
        Departamento:"La Guajira",
        MunicipioId: "1",
        PaisId: "1",
        FechaNacimiento:"2001-03-17",//este
        TipoPersonaId: "1",
        Telefono:"31264573",
      },
      Expediente:{
        Cuantia:"10000",
        Descripcion:"descripcion",
        DireccionEjecutado:"direccion eje",
        DireccionTituloEjecutivo:"direccion titu",
        EntidadEncargada:"Entidad encargada",
        FechaRadicacion:"2017-05-10",
        Identificacion:"1065823365",
        NaturalezaObligacion:"naturaleza",
        Nombre:"Sebastian",
        UbicacionExpediente:"en lote tal"
      }
    };

    $scope.registar();
    console.log($scope.resp.msg);
    expect('Solo se registran mayores de edad').toEqual($scope.resp.msg);
  });

});