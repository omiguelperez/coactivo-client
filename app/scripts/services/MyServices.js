
App.service("MiServicio", function ($http) {  

	this.get_Radicaciones = function() {
		return [{"Tipo":"Cartera","Numero":"123456","Fecha":"20/11/2014","Periodo":"20/11/2014-20/02/2015","Valor":"5000000"},
		{"Tipo":"Impuesto","Numero":"4589345","Fecha":"11/03/2015","Periodo":"11/03/2015-11/05/2015","Valor":"30000000"}];
	}

	this.Registar = function(Datos,callback) {

		$http({
			method: 'POST',
			url: URL_APIS.MiServicio.Registar,
			data: $.param(Datos),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).then(function(successCallback) {   
			if (successCallback.data.filasAfectadas > 0 && !successCallback.data.error) {
				callback(!successCallback.data.error,successCallback.data.mensaje);
        	}else{
        		callback(!successCallback.data.error,successCallback.data.mensaje);
        	}
    }, function(errorCallback){
    	if (errorCallback.status == 400) {
    		callback(false,errorCallback.data.message);
    	}
    });

	}

});