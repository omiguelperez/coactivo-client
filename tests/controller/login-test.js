describe("Probando controlador login", function() {
    
    describe("Proceso de pruebas", function() {
        beforeEach(module("desktopApp"));

        //beforeEach(inject(function($rootScope, $controller)
        beforeEach(inject(function($injector)
        {
            var $rootScope = $injector.get("$rootScope"), 
            $controller = $injector.get("$controller");
            scope = $rootScope.$new();
            controller = $controller("login", {$scope: scope});
        }));

        
        /*it("Faltan campos por completar", function()
        {
            expect(scope.user).toBeDefined();
            expect(scope.password).toBeDefined();
            expect(scope.user).not.toBe("");
            expect(scope.password).not.toBe("");
        });*/  
        

        it("EL campo user falta por completar", function()
        {
            expect(scope.user).toBeDefined();
        });

        it("EL campo password falta por completar", function()
        {
            expect(scope.password).toBeDefined();
        });

        /*
        it("User incorrecto", function()
        {
            expect(scope.user).toEqual("acastillo");
        });

        it("Password incorrecta", function()
        {
            expect(scope.password).toEqual(12345);
        });*/

        /*var $httpBackend, $rootScope, $controller, scope, controller;
        beforeEach(inject(function($injector)
        {
            $httpBackend = $injector.get("$httpBackend");   
            $rootScope = $injector.get("$rootScope");   
            $controller = $injector.get("$controller");
            
            $httpBackend.when('GET', '/usuario').respond([
                {name: 'Adrian Castillo'},
                {name: 'Daniel Castillo'}
            ]);

            scope = $rootScope.$new();
            controller = $controller("login", {$scope: scope});
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it("Test", function()
        {
            $httpBackend.flush();
            //expect(scope.usuario).toEqual({name: 'Adrian Castilla'});
            expect(scope.usuario.length).toEqual(2);
        });*/


    });    
});