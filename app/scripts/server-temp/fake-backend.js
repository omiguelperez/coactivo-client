
angular
.module('serverApp',['desktopApp','ngMockE2E'])
.run(setupFakeBackend);

function setupFakeBackend($httpBackend) {
    
    $httpBackend.whenPOST('/api').respond(function (method, url, data) {
        return api(method,url,data);
    });

    $httpBackend.whenPOST('/api_registrar').respond(function (method, url, data) {
        return api_registrar(method, url, data);
    });

    $httpBackend.whenPOST('/api/createUser').respond(function (method, url, data, headers) {
        return CreateUser(method, url, data);
    });

    $httpBackend.whenGET('/api/GETobligacionesTipos').respond(function (method, url, data) {
        return GETobligacionesTipos(method, url, data);
    });

    $httpBackend.whenGET('/api/GETobligaciones').respond(function (method, url, data) {
       return GETobligaciones(method, url, data);
    });

    $httpBackend.whenGET('/api/GETpaises').respond(function (method, url, data) {
        return GetPaises(method, url, data);
    });

    $httpBackend.whenGET('/api/GETroles/').respond(function (method, url, data, headers) {
        return GetRoles(method, url, data, headers);
    });

    $httpBackend.whenRoute('GET','/api/GETDepartamentosById/:id').respond(function (method, url, data, headers, params) {
        return GetDepartamentosById(method, url, data);
    });

    $httpBackend.whenRoute('GET','/api/GETMunicipiosById/:id').respond(function (method, url, data, headers, params) {
        return GetMunicipiosByIdDept(method, url, data, params);
    });

        // pass through any urls not handled above so static files are served correctly
        $httpBackend.whenGET(/^\w+.*/).passThrough();
    }