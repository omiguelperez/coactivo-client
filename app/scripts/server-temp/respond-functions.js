function api(method, url, data) {
	var testUser = { username: 'Abogado', password: 'Abogado', firstName: 'Test', lastName: 'User' },
        testUser2 = { username: 'Secretaria', password: 'Secretaria', firstName: 'Test', lastName: 'User' },
        testUser3 = { username: 'Lider', password: 'Lider', firstName: 'Test', lastName: 'User' },

		params = converter(data),

		json = {
		"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiJkMDRmOTIyMC01YmVmLTQ2Z"+
		"TgtYmU0My1mMjhlMDg3ODA1ZDAiLCJ1bmlxdWVfbmFtZSI6InNlY3JldGFyaWEiLCJodHRwOi8vc2NoZW1hcy5taWNy"+
		"b3NvZnQuY29tL2FjY2Vzc2NvbnRyb2xzZXJ2aWNlLzIwMTAvMDcvY2xhaW1zL2lkZW50aXR5cHJvdmlkZXIiOiJBU1AuT"+
		"kVUIElkZW50aXR5IiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiI4MGZjZmFjYi02Yjc4LTQ1OGMtODg1Zi0"+
		"2MWM5ZjBmN2JhM2QiLCJyb2xlIjoiU2VjcmV0YXJpYSIsIkZURSI6IjEiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjE4Nz"+
		"YiLCJhdWQiOiI0MTRlMTkyN2EzODg0ZjY4YWJjNzlmNzI4MzgzN2ZkMSIsImV4cCI6MTQ5NDI4MDQ2NSwibmJmIjoxNDk0MT"+
		"k0MDY1fQ.f7rPJUcu_zgVqVyZQEYMA6ZnHr8sr-JcfOcRokuK72c",
		"token_type": "bearer",
		"expires_in": 86399,
		"roles": "",
		"persona": '',
		"usuario": '{"FirstName":"secretaria","LastName":"secretaria","Level":1,'+
		'"JoinDate":"2014-05-07T16:48:12.83","PersonaId":2,"Persona":null,"Cobros":[],'+
		'"Email":"secretaria@gmail.com","EmailConfirmed":true,'+
		'"PasswordHash":"AMbhg5E0sYddwbZC1/SoeK0dahUP3Aq65LOJzMEIN5uZcGomJfb4lOWflDxiGfzoqQ==",'+
		'"SecurityStamp":"80fcfacb-6b78-458c-885f-61c9f0f7ba3d","PhoneNumber":null,'+
		'"PhoneNumberConfirmed":false,"TwoFactorEnabled":false,"LockoutEndDateUtc":null,'+
		'"LockoutEnabled":false,"AccessFailedCount":0,"Roles":[{"UserId":"d04f9220-5bef-46e8-be43-f28e087805d0",'+
		'"RoleId":"08a288de-8f82-4d4f-b3b4-a898f00d39b2"}],"Claims":[],"Logins":[],'+
		'"Id":"d04f9220-5bef-46e8-be43-f28e087805d0","UserName":"secretaria"}'
	}

	if ((params.username === testUser.username && params.password === testUser.password)) {
		json.persona = '{"PersonaId":2,"Identificacion":"10253652142","Nombres":"Yo Soy",'+
		'"Apellidos":"Abogado Proyecto","Sexo":"F","Telefono":31500212,"Direccion":"Carrera 13 # 36 - 111",'+
		'"TipoPersonaId":1,"TipoPersona":null,"Nacionalidad":"Colombia","PaisNacimiento":"Colombia",'+
		'"PaisCorrespondencia":"Colombia","Departamento":"Cesar","Municipio":"Valledupar",'+
		'"Email":"soyabogado.14@hotmail.com","FechaNacimiento":"1996-07-30T00:00:00","Obligaciones":[],'+
		'"UpdateAt":"2017-05-07T00:00:00","CreatedAt":"2017-05-07T00:00:00"}';
		json.roles = "Abogado;Abogado";
		return [200, json, {}];
	} else if((params.username === testUser2.username && params.password === testUser2.password)){
		json.persona = '{"PersonaId":2,"Identificacion":"10253652142","Nombres":"Yo Soy",'+
		'"Apellidos":"Secretaria Proyecto","Sexo":"F","Telefono":31500212,"Direccion":"Carrera 13 # 36 - 111",'+
		'"TipoPersonaId":1,"TipoPersona":null,"Nacionalidad":"Colombia","PaisNacimiento":"Colombia",'+
		'"PaisCorrespondencia":"Colombia","Departamento":"Cesar","Municipio":"Valledupar",'+
		'"Email":"soysecretaria.14@hotmail.com","FechaNacimiento":"1996-07-30T00:00:00","Obligaciones":[],'+
		'"UpdateAt":"2017-05-07T00:00:00","CreatedAt":"2017-05-07T00:00:00"}';
		json.roles = "Secretaria;Secretaria";
		return [200, json, {}];
	} else if((params.username === testUser3.username && params.password === testUser3.password)){
		json.persona = '{"PersonaId":2,"Identificacion":"10253652142","Nombres":"Yo Soy",'+
		'"Apellidos":"Lider Proyecto","Sexo":"F","Telefono":31500212,"Direccion":"Carrera 13 # 36 - 111",'+
		'"TipoPersonaId":1,"TipoPersona":null,"Nacionalidad":"Colombia","PaisNacimiento":"Colombia",'+
		'"PaisCorrespondencia":"Colombia","Departamento":"Cesar","Municipio":"Valledupar",'+
		'"Email":"soylider.14@hotmail.com","FechaNacimiento":"1996-07-30T00:00:00","Obligaciones":[],'+
		'"UpdateAt":"2017-05-07T00:00:00","CreatedAt":"2017-05-07T00:00:00"}';
		json.roles = "Lider;Lider";
		return [200, json, {}];
	}else{
		return [400, {error_description:"Usuario o contraseña incorrecta"}, {}];
	}
}

function api_registrar(method, url, data) {
	return [200, {filasAfectadas:1, mensaje:"Guardado Correctamente",error:false}, {}];
}

function CreateUser(method, url, data) {
	return [200, {url:"1"}, {}];
}

function GETobligacionesTipos(method, url, data) {
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
}

function GETobligaciones(method, url, data) {
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
}

function GetRoles(method, url, data,headers) {
	var json = [
	{name:"Secretaria"},
	{name:"Abogado"},
	{name:"Lider"},
	];
	return [200, json, {}];
}

function GetPaises(method, url, data) {
	var json = [
	{paisId:"1",nombre:"Colombia"},
	];
	return [200, json, {}];
}

function GetDepartamentosById(method, url, data) {
	var json = [
	{departamentoId:"1",nombre:"Cesar"},
	{departamentoId:"2",nombre:"La Guajira"},
	];
	return [200, json, {}];
}

function GetMunicipiosByIdDept(method, url, data, params) {
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
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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