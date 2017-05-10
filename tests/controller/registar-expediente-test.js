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

 describe('Registro un dato de tipo incorrecto', function() {
    it('ingresando datos', function() {
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
              Email:"s@g.com",
              Nacionalidad:"Colombia",
              PaisNacimiento:"Colombia",
              PaisCorrespondencia:"Colombia",
              Departamento:"La Guajira",
              Municipio:"Fonseca",
              TipoPersonaId:"1",
              Telefono:"3126742473",
              FechaNacimiento:"1996-03-17",
          },
          Expediente:{
              Cuantia:"10000",
              Descripcion:"mi descripcion...",
              DireccionEjecutado:"direccion del eje",
              DireccionTituloEjecutivo:"direccion del titu",
              EntidadEncargada:"Entidad encar",
              FechaRadicacion:"2017-05-02",
              Identificacion:"1065823365",
              NaturalezaObligacion:"",//este dato
              Nombre:"Sebastian",
              UbicacionExpediente:"en lote tal"
          }
        };
      $scope.registar();
      setTimeout(function() {expect($scope.resp.msg).toEqual('Tiene un campo Incorrecto');}, 2000);
    });
  });

  describe('Registro fecha por encima de la actual', function() {
    it('ingresando datos', function() {
        $scope.Nuevo = {
          Cuantia:"10000", 
          Deuda:"10000", 
          Estado:"Pendiente",
          FechaPreinscripcion:"2018-05-01",//este dato
          TipoObligacionId:"1",      
          Persona:{
              Apellidos:"Gonzalez Morales",
              Direccion:"Carrera 15 #13 bbis 21",
              Identificacion:"1065823365",
              Nombres:"Sebastian",
              Sexo:"M",
              Email:"s@g.com",
              Nacionalidad:"Colombia",
              PaisNacimiento:"Colombia",
              PaisCorrespondencia:"Colombia",
              Departamento:"La Guajira",
              Municipio:"Fonseca",
              TipoPersonaId:"1",
              Telefono:"3126742473",
              FechaNacimiento:"1996-03-17",
          },
          Expediente:{
              Cuantia:"10000",
              Descripcion:"mi descripcion...",
              DireccionEjecutado:"direccion del eje",
              DireccionTituloEjecutivo:"direccion del titu",
              EntidadEncargada:"Entidad encar",
              FechaRadicacion:"2017-05-02",
              Identificacion:"1065823365",
              NaturalezaObligacion:"Natura",
              Nombre:"Sebastian",
              UbicacionExpediente:"en lote tal"
          }
        };
      $scope.registar();
      setTimeout(function() {expect($scope.resp.msg).toEqual('Las fechas no puede ser mayores a la actual');}, 2000);
    });
  });

  describe('Registro fecha nacimiento de menores de edad', function() {
    it('ingresando datos', function() {
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
              Email:"s@g.com",
              Nacionalidad:"Colombia",
              PaisNacimiento:"Colombia",
              PaisCorrespondencia:"Colombia",
              Departamento:"La Guajira",
              Municipio:"Fonseca",
              TipoPersonaId:"1",
              Telefono:"3126742473",
              FechaNacimiento:"2000-03-17",//este dato
          },
          Expediente:{
              Cuantia:"10000",
              Descripcion:"mi descripcion...",
              DireccionEjecutado:"direccion del eje",
              DireccionTituloEjecutivo:"direccion del titu",
              EntidadEncargada:"Entidad encar",
              FechaRadicacion:"2017-05-02",
              Identificacion:"1065823365",
              NaturalezaObligacion:"Natura",
              Nombre:"Sebastian",
              UbicacionExpediente:"en lote tal"
          }
        };
      $scope.registar();
      setTimeout(function() {expect($scope.resp.msg).toEqual('Solo se registran mayores de edad');}, 2000);
    });
  });

});