
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

    $httpBackend.whenGET('/api/GETobligaciones').respond(function (method, url, data) {
        var json = [
        {
            "obligacionId": 1,
            "cuantia": 525000,
            "dueda": 525000,
            "fechaPreinscripcion": "2017-03-09T00:00:00",
            "estado": "Por autorizar",
            "cobros": [],
            "expedienteId": 1,
            "expediente": {
                "expedienteId": 1,
                "entidadEncargada": "Entidad encargada es maira",
                "nombre": "Maira mindiola",
                "identificacion": "1065824563",
                "direccionEjecutado": "Esto es una direccion",
                "cuantia": 525000,
                "naturalezaObligacion": "Naturaleza es algo",
                "direccionTituloEjecutivo": "Esto es una direcciond e titulo ejecutivo",
                "descripcion": "Esto es una descripcion",
                "ubicacionExpediente": "Esta en el lote tal",
                "fechaRadicacion": "2017-03-19T00:00:00",
                "updateAt": "0001-01-01T00:00:00",
                "createdAt": "0001-01-01T00:00:00",
                "documentos": [],
            },
            "tipoObligacionId": 1,
            "tipoObligacion": null,
            "personaId": 1,
            "persona": null,
            "updateAt": "0001-01-01T00:00:00",
            "createdAt": "0001-01-01T00:00:00"
        },
        {
            "obligacionId": 2,
            "cuantia": 300000,
            "dueda": 300000,
            "fechaPreinscripcion": "2017-03-09T00:00:00",
            "estado": "Por autorizar",
            "cobros": [],
            "expedienteId": 2,
            "expediente": {
                "expedienteId": 2,
                "entidadEncargada": "Entidad encargada es maira",
                "nombre": "Sebas Gonzalez",
                "identificacion": "1065823365",
                "direccionEjecutado": "Esto es una direccion",
                "cuantia": 300000,
                "naturalezaObligacion": "Naturaleza es algo",
                "direccionTituloEjecutivo": "Esto es una direcciond e titulo ejecutivo",
                "descripcion": "Esto es una descripcion",
                "ubicacionExpediente": "Esta en el lote tal",
                "fechaRadicacion": "2017-03-19T00:00:00",
                "updateAt": "0001-01-01T00:00:00",
                "createdAt": "0001-01-01T00:00:00",
                "documentos": [],
            },
            "tipoObligacionId": 1,
            "tipoObligacion": null,
            "personaId": 1,
            "persona": null,
            "updateAt": "0001-01-01T00:00:00",
            "createdAt": "0001-01-01T00:00:00"
        },
        {
            "obligacionId": 3,
            "cuantia": 999999,
            "dueda": 999999,
            "fechaPreinscripcion": "2017-03-09T00:00:00",
            "estado": "Por autorizar",
            "cobros": [],
            "expedienteId": 3,
            "expediente": {
                "expedienteId": 3,
                "entidadEncargada": "Entidad encargada es maira",
                "nombre": "Javier hernandez",
                "identificacion": "1111111111",
                "direccionEjecutado": "Esto es una direccion",
                "cuantia": 999999,
                "naturalezaObligacion": "Naturaleza es algo",
                "direccionTituloEjecutivo": "Esto es una direcciond e titulo ejecutivo",
                "descripcion": "Esto es una descripcion",
                "ubicacionExpediente": "Esta en el lote tal",
                "fechaRadicacion": "2017-03-19T00:00:00",
                "updateAt": "0001-01-01T00:00:00",
                "createdAt": "0001-01-01T00:00:00",
                "documentos": [],
            },
            "tipoObligacionId": 1,
            "tipoObligacion": null,
            "personaId": 1,
            "persona": null,
            "updateAt": "0001-01-01T00:00:00",
            "createdAt": "0001-01-01T00:00:00"
        }
        ];
        return [200, json, {}];
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