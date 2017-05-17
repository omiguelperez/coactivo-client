
angular
.module('serverApp-TestUnit',['ngMockE2E'])
.run(setupFakeBackend);

function setupFakeBackend($httpBackend) {

    // $httpBackend.expect('POST','/api/createUser').respond(function (method, url, data, headers) {
    //     return CreateUser(method, url, data);
    // });

    // $httpBackend.expect('GET','/api/GETobligacionesTipos').respond(function (method, url, data) {
    //     return GETobligacionesTipos(method, url, data);
    // });

    // $httpBackend.expect('GET','/api/GETobligaciones').respond(function (method, url, data) {
    //     return GETobligaciones(method, url, data);
    // });

    // $httpBackend.expect('GET','/api/GETpaises').respond(function (method, url, data) {
    //     return GetPaises(method, url, data);
    // });

    // $httpBackend.expect('GET','/api/GETroles/').respond(function (method, url, data, headers) {
    //     return GetRoles(method, url, data, headers);
    // });

    // $httpBackend.expect('GET','/api/GETDepartamentosById/:id').respond(function (method, url, data, headers, params) {
    //     return GetDepartamentosById(method, url, data);
    // });

    // $httpBackend.expect('GET','/api/GETMunicipiosById/:id').respond(function (method, url, data, headers, params) {
    //     return GetMunicipiosByIdDept(method, url, data, params);
    // });

        // pass through any urls not handled above so static files are served correctly
        $httpBackend.whenGET(/^\w+.*/).passThrough();
    }