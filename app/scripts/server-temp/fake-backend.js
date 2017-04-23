
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
                return [200, { token: 'fake-jwt-token', state: 1}, {}];
            } else {
                return [200, {}, {}];
            }
        });


        // pass through any urls not handled above so static files are served correctly
        $httpBackend.whenGET(/^\w+.*/).passThrough();
    }