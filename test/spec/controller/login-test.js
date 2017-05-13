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
    var $controller, $scope, $rootScope, $timeout;

  beforeEach(function() {
      module('desktopApp');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $timeout = $injector.get('$timeout');
            controller = $injector.get('$controller')("LoginController", {$scope: $scope,$timeout:$timeout});
        });
  });

  xdescribe('Ingreso en condiciones ideales al sistema', function() {
    var originalTimeout;
    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;
    });

    xit('iniciar sesion v1', function() {
       
    });
    
    it("takes a long time", function(done) {
      
        $scope.username = 'Secretaria';
        $scope.password = 'Secreta';
        $scope.login();
       
        //$timeout.flush();

        // this will throw an exception if there are any pending timeouts.
        //$timeout.verifyNoPendingTasks();
        $timeout(function() {
          console.log($scope.error);
        }, 2000);
      // console.log('1:'+$scope.error);
      // setTimeout(function() {
      //   $scope.username = 'Secretaria';
      //   $scope.password = 'Secretar';
      //   $scope.login();
      //   console.log('2:'+$scope.error);
      //   //expect($scope.error).toEqual(false);
      //   done();
      // }, 1000);
      // console.log('3:'+$scope.error);
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
  });

  xdescribe('Ingreso erroneo al sistema', function() {
    xit('iniciar sesion v2', function() {
      $scope.username = 'Secretaria';
      $scope.password = 'Abogado';
      $scope.login();
      $scope.login();
      console.log($scope.error);
      setTimeout(function() {expect($scope.error).toEqual(true); }, 2000); 
    });
  });
});