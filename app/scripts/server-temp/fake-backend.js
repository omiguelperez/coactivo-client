
angular
.module('serverApp',['desktopApp','ngMockE2E'])
.run(setupFakeBackend);

function setupFakeBackend($httpBackend) {
    var testUser = { username: 'Abogado', password: 'Abogado', firstName: 'Test', lastName: 'User' };
    var testUser2 = { username: 'Secretaria', password: 'Secretaria', firstName: 'Test', lastName: 'User' };

    $httpBackend.whenPOST('/api').respond(function (method, url, data) {

        var params = converter(data);

        if ((params.username === testUser.username && params.password === testUser.password)) {
            return [200, { access_token: 'fake-jwt-token',roles:'Abogado;Abogado'}, {}];
        } else if((params.username === testUser2.username && params.password === testUser2.password)){
            return [200, { access_token: 'fake-jwt-token',roles:'Secretaria;Secretaria'}, {}];
        }else{
            return [400, {error_description:"Usuario o contraseña incorrecta"}, {}];
        }
    });

    $httpBackend.whenPOST('/api_registrar').respond(function (method, url, data) {
        return [200, {filasAfectadas:1, mensaje:"Guardado Correctamente",error:false}, {}];
    });


        // pass through any urls not handled above so static files are served correctly
        $httpBackend.whenGET(/^\w+.*/).passThrough();
    }

    function converter(argument) {
        var params = {};
        var vars = argument.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            pair[0] = decodeURIComponent(pair[0]);
            pair[1] = decodeURIComponent(pair[1]);
                // If first entry with this name
                if (typeof params[pair[0]] === "undefined") {
                    params[pair[0]] = pair[1];
                // If second entry with this name
            } else if (typeof params[pair[0]] === "string") {
                var arr = [ params[pair[0]], pair[1] ];
                params[pair[0]] = arr;
                    // If third or later entry with this name
                } else {
                    params[pair[0]].push(pair[1]);
                }
            } 

            return params;
        }