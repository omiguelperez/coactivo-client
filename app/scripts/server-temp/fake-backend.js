
    angular
        .module('serverApp',['desktopApp','ngMockE2E'])
        .run(setupFakeBackend);

    function setupFakeBackend($httpBackend) {
        var testUser = { username: 'Abogado', password: 'Abogado', firstName: 'Test', lastName: 'User' };
        var testUser2 = { username: 'Secretaria', password: 'Secretaria', firstName: 'Test', lastName: 'User' };

        $httpBackend.whenPOST('/api').respond(function (method, url, data) {
            var params = angular.fromJson(data);
            if ((params.username === testUser.username && params.password === testUser.password)||
                (params.username === testUser2.username && params.password === testUser2.password)) {
                return [200, { access_token: 'fake-jwt-token',Roles:['Secretaria']}, {}];
            } else {
                return [400, {error_description:"Usuario o contraseña incorrecta"}, {}];
            }
        });

        $httpBackend.whenPOST('/api_registrar').respond(function (method, url, data) {
            var params = angular.fromJson(data);
            return [200, {FilasAfectadas:1, Mensaje:"Guardado Correctamente",Error:false}, {}];
        });


        // pass through any urls not handled above so static files are served correctly
        $httpBackend.whenGET(/^\w+.*/).passThrough();
    }