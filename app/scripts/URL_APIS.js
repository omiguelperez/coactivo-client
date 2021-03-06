var dominio = "http://localhost:8088";

var URL_APIS = {
	AuthenticationService:{
		Login:dominio+"/oauth/token"
	},
	MiServicio:{
		Registar:dominio+"/api/obligaciones",
		ObtenerExpedientes:dominio+"/api/obligaciones",
		ObtenerTiposObligaciones:dominio+"/api/tiposobligaciones",
        ObtenerRoles:dominio+"/api/roles",
        RegistrarUsuarioByLider:dominio+"/api/accounts/create",
        ObtenerPaises:dominio+"/api/paises",
        ObtenerDepartamentosByPaisId:dominio+"/api/departamentos/",
        ObtenerMunicipiosByDepartamentoId:dominio+"/api/municipios/",
	}
}