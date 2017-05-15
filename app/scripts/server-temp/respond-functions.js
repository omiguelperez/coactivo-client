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