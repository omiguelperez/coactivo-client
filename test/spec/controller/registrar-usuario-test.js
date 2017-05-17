describe('Pruebas unitarias para Registar Usuarios', function() {
  var $controller, $scope, $rootScope, MiServicio;

  beforeEach(function() {
    module('desktopApp');
    module('serverApp-TestUnit');

    inject(function($injector,_MiServicio_) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      $httpBackend = $injector.get('$httpBackend');
      controller = $injector.get('$controller')("RegistrarUsers", {$scope: $scope});
      MiServicio = _MiServicio_;
    });

  });

});