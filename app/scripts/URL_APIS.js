var dominio = "http://localhost:1876";

var URL_APIS = {
	AuthenticationService:{
		Login:dominio+"/oauth/token"
	},
	MiServicio:{
		Registar:dominio+"/api/obligaciones",
		ObtenerExpedientes:dominio+"/api/obligaciones",
		ObtenerTiposObligaciones:dominio+"/api/tiposobligaciones"
	}
}