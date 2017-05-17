
App.service("MiServicio", function ($http,$sessionStorage, $rootScope) {  

	this.get_Radicaciones = function() {
		return [{"Tipo":"Cartera","Numero":"123456","Fecha":"20/11/2014","Periodo":"20/11/2014-20/02/2015","Valor":"5000000"},
		{"Tipo":"Impuesto","Numero":"4589345","Fecha":"11/03/2015","Periodo":"11/03/2015-11/05/2015","Valor":"30000000"}];
	};

	this.Registar = function(Datos) {

            return $http({
                method: 'POST',
                url: URL_APIS.MiServicio.Registar,
                data: $.param(Datos),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                });

	};
        
        this.RegistrarUsuarioByLider = function(Datos,callback) {

            return $http({
                method: 'POST',
                url: URL_APIS.MiServicio.RegistrarUsuarioByLider,
                data: $.param(Datos),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization':'bearer '+$rootScope.session}
                });

	};

	this.ObtenerExpedientes = function() {
		
		return $http({
			method: 'GET',
			url: URL_APIS.MiServicio.ObtenerExpedientes,
			data: $.param(""),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});

	};

	this.ObtenerTiposObligaciones = function() {
		
		return $http({
			method: 'GET',
			url: URL_APIS.MiServicio.ObtenerTiposObligaciones,
			data: $.param(""),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});

	};
        
    this.ObtenerRolesByLider = function(TokenSession, callback) {
		
		return $http({
			method: 'GET',
			url: URL_APIS.MiServicio.ObtenerRoles,
			data: $.param(""),
			headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization':'bearer '+$rootScope.session}
		});

	};

	this.ObtenerPaises = function() {
		
		return $http({
			method: 'GET',
			url: URL_APIS.MiServicio.ObtenerPaises,
			data: $.param(""),
			headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization':'bearer '+$rootScope.session}
		});

	};

	this.ObtenerDepartamentosByIdPais = function(IdPais) {
		
		return $http({
			method: 'GET',
			url: URL_APIS.MiServicio.ObtenerDepartamentosByPaisId+""+IdPais,
			data: $.param(""),
			headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization':'bearer '+$rootScope.session}
		});

	};

	this.ObtenerMunicipiosByIdDepartamento = function(IdDepartamento) {
		
		return $http({
			method: 'GET',
			url: URL_APIS.MiServicio.ObtenerMunicipiosByDepartamentoId+""+IdDepartamento,
			data: $.param(""),
			headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization':'bearer '+$rootScope.session}
		});

	};

});