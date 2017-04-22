
App.service("MiServicio", function ($http) {  

	this.get_Radicaciones = function() {
		return [{"Tipo":"Cartera","Numero":"123456","Fecha":"20/11/2014","Periodo":"20/11/2014-20/02/2015","Valor":"5000000"},
		{"Tipo":"Impuesto","Numero":"4589345","Fecha":"11/03/2015","Periodo":"11/03/2015-11/05/2015","Valor":"30000000"}];
	}

	this.Registar = function(Datos) {
		return {"estado":true,"mensaje":"Registrado Correctamente","color":"green rounded"};
	}

});