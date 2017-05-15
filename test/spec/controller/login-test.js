//Sebas test

describe('Pruebas unitarias para iniciar sesion', function() {
  var $controller, $scope, $rootScope, AuthenticationService;
  var originalTimeout;

  beforeEach(function() {
    module('desktopApp');
    module('serverApp-TestUnit');

    inject(function($injector,_AuthenticationService_) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      $httpBackend = $injector.get('$httpBackend');
      controller = $injector.get('$controller')("LoginController", {$scope: $scope});
      AuthenticationService = _AuthenticationService_;
    });

  });

  it("Acceso Ideal", function() {

    AuthenticationService.Login("Secretaria","Secretaria")
    .then(function(response){
      console.log(response.status);
      expect(200).toEqual(response.status);
    });

    $httpBackend.flush();

  });

  it("Acceso Errado", function() {
    
    AuthenticationService.Login("Secretaria","Abogado")
    .catch(function(response){
      console.log(response.status);
      expect(400).toEqual(response.status);
    });

    $httpBackend.flush();

  });

});

// xdescribe("Probando controlador login", function() {

//   xdescribe("Proceso de pruebas", function() {
//     beforeEach(module("desktopApp"));

//         //beforeEach(inject(function($rootScope, $controller)
//         beforeEach(inject(function($injector)
//         {
//           var $rootScope = $injector.get("$rootScope"), 
//           $controller = $injector.get("$controller");
//           scope = $rootScope.$new();
//           controller = $controller("LoginController", {$scope: scope});
//         }));

        
//         /*it("Faltan campos por completar", function()
//         {
//             expect(scope.user).toBeDefined();
//             expect(scope.password).toBeDefined();
//             expect(scope.user).not.toBe("");
//             expect(scope.password).not.toBe("");
//           });*/  


//           xit("EL campo user falta por completar", function()
//           {
//             expect(scope.username).toBeDefined();
//           });

//           xit("EL campo password falta por completar", function()
//           {
//             expect(scope.password).toBeDefined();
//           });


//           xit("User incorrecto", function()
//           {
//             expect(scope.user).toEqual("acastillo");
//           });

//           xit("Password incorrecta", function()
//           {
//             expect(scope.password).toEqual(12345);
//           });

//           var $httpBackend, $rootScope, $controller, scope, controller;
//           beforeEach(inject(function($injector)
//           {
//             $httpBackend = $injector.get("$httpBackend");   
//             $rootScope = $injector.get("$rootScope");   
//             $controller = $injector.get("$controller");
            
//             $httpBackend.when('GET', '/usuario').respond([
//               {name: 'Adrian Castillo'}
//                 // {name: 'Daniel Castillo'}
//                 ]);

//             scope = $rootScope.$new();
//             controller = $controller("LoginController", {$scope: scope});
//           }));

//           afterEach(function() {
//             $httpBackend.verifyNoOutstandingExpectation();
//             $httpBackend.verifyNoOutstandingRequest();
//           });

//           it("Test", function()
//           {
//             $httpBackend.flush();
//             console.log('afria');
//             expect(scope.usuario).toEqual([{name: 'Adrian Castillo'}]);
//             expect(scope.usuario.length).toEqual(1);
//           });


//         });    
// });