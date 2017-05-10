xdescribe("Probando controlador login", function() {
    
    xdescribe("Proceso de pruebas", function() {
        beforeEach(module("desktopApp"));

        //beforeEach(inject(function($rootScope, $controller)
        beforeEach(inject(function($injector)
        {
            var $rootScope = $injector.get("$rootScope"), 
            $controller = $injector.get("$controller");
            scope = $rootScope.$new();
            controller = $controller("LoginController", {$scope: scope});
        }));

        
        /*it("Faltan campos por completar", function()
        {
            expect(scope.user).toBeDefined();
            expect(scope.password).toBeDefined();
            expect(scope.user).not.toBe("");
            expect(scope.password).not.toBe("");
        });*/  
        

        xit("EL campo user falta por completar", function()
        {
            expect(scope.username).toBeDefined();
        });

        xit("EL campo password falta por completar", function()
        {
            expect(scope.password).toBeDefined();
        });

        
        xit("User incorrecto", function()
        {
            expect(scope.user).toEqual("acastillo");
        });

        xit("Password incorrecta", function()
        {
            expect(scope.password).toEqual(12345);
        });

        var $httpBackend, $rootScope, $controller, scope, controller;
        beforeEach(inject(function($injector)
        {
            $httpBackend = $injector.get("$httpBackend");   
            $rootScope = $injector.get("$rootScope");   
            $controller = $injector.get("$controller");
            
            $httpBackend.when('GET', '/usuario').respond([
                {name: 'Adrian Castillo'}
                // {name: 'Daniel Castillo'}
            ]);

            scope = $rootScope.$new();
            controller = $controller("LoginController", {$scope: scope});
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it("Test", function()
        {
            $httpBackend.flush();
            console.log('afria');
            expect(scope.usuario).toEqual([{name: 'Adrian Castillo'}]);
            expect(scope.usuario.length).toEqual(1);
        });


    });    
});

//Sebas test

xdescribe('Pruebas unitarias para iniciar sesion', function() {
    var $controller, $scope, $rootScope;

  beforeEach(function() {
      module('desktopApp');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("LoginController", {$scope: $scope});
        });
  });

  xdescribe('Ingreso en condiciones ideales al sistema', function() {
    it('iniciar sesion v1', function() {
      var x = function (argumete) {
        console.log(argumete);
      }

      $scope.username = 'Secretaria';
      $scope.password = 'Secretaria';
      $scope.login(x);
      //$scope.login();
      //console.log($scope.error);
      setTimeout(function() {expect($scope.error).toEqual(false);}, 2000); 
    });
  });

  xdescribe('Ingreso erroneo al sistema', function() {
    it('iniciar sesion v2', function() {
      $scope.username = 'Secretaria';
      $scope.password = 'Abogado';
      $scope.login();
      $scope.login();
      console.log($scope.error);
      setTimeout(function() {expect($scope.error).toEqual(true); }, 2000); 
    });
  });
});