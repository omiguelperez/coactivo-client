
angular
.module('serverApp-TestUnit',['ngMockE2E'])
.run(setupFakeBackend);

function setupFakeBackend($httpBackend) {
    var testUser = { username: 'Abogado', password: 'Abogado', firstName: 'Test', lastName: 'User' };
    var testUser2 = { username: 'Secretaria', password: 'Secretaria', firstName: 'Test', lastName: 'User' };
    var testUser3 = { username: 'Lider', password: 'Lider', firstName: 'Test', lastName: 'User' };

    $httpBackend.expect('POST','/api').respond(function(method, url, data){
        return api(method,url,data);
    });

    $httpBackend.whenPOST('/api_registrar').respond(function (method, url, data) {
        return [200, {filasAfectadas:1, mensaje:"Guardado Correctamente",error:false}, {}];
    });

    $httpBackend.whenPOST('/api/createUser').respond(function (method, url, data, headers) {
        return [200, {url:"1"}, {}];
    });

    $httpBackend.whenGET('/api/GETobligacionesTipos').respond(function (method, url, data) {
        var json = [
        {
            "tipoObligacionId": 1,
            "nombre": "Tipo Obligacion 1",
            "obligaciones": [],
            "updateAt": "0001-01-01T00:00:00",
            "createdAt": "0001-01-01T00:00:00"
        },
        {
            "tipoObligacionId": 2,
            "nombre": "Tipo Obligacion 2",
            "obligaciones": [],
            "updateAt": "0001-01-01T00:00:00",
            "createdAt": "0001-01-01T00:00:00"
        },
        {
            "tipoObligacionId": 3,
            "nombre": "Tipo Obligacion 3",
            "obligaciones": [],
            "updateAt": "0001-01-01T00:00:00",
            "createdAt": "0001-01-01T00:00:00"
        }
        ];
        return [200, json, {}];
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

    $httpBackend.whenGET('/api/GETpaises').respond(function (method, url, data) {
        var json = [
            {paisId:"1",nombre:"Colombia"},
        ];
        return [200, json, {}];
    });

    $httpBackend.whenGET('/api/GETroles/').respond(function (method, url, data,headers) {
        var json = [
            {name:"Secretaria"},
            {name:"Abogado"},
            {name:"Lider"},
        ];
        return [200, json, {}];
    });

    $httpBackend.whenRoute('GET','/api/GETDepartamentosById/:id').respond(function (method, url, data, headers, params) {
        var json = [
            {departamentoId:"1",nombre:"Cesar"},
            {departamentoId:"2",nombre:"La Guajira"},
        ];
        return [200, json, {}];
    });

    $httpBackend.whenRoute('GET','/api/GETMunicipiosById/:id').respond(function (method, url, data, headers, params) {
        if (params.id === "1") {
            var json = [
            {municipioId:"1",nombre:"Valledupar"},
            {municipioId:"2",nombre:"Aguachica"},
            {municipioId:"3",nombre:"Codazzi"},
            ];
        } else {
            var json = [
            {municipioId:"1",nombre:"Fonseca"},
            {municipioId:"2",nombre:"Rioacha"},
            {municipioId:"3",nombre:"Maicao"},
            ];
        }
        
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