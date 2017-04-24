
App.service("MiServicio", function ($http) {  

	this.get_Radicaciones = function() {
		return [{"Tipo":"Cartera","Numero":"123456","Fecha":"20/11/2014","Periodo":"20/11/2014-20/02/2015","Valor":"5000000"},
		{"Tipo":"Impuesto","Numero":"4589345","Fecha":"11/03/2015","Periodo":"11/03/2015-11/05/2015","Valor":"30000000"}];
	}

	this.Registar = function(Datos,callback) {

		$http({
			method: 'POST',
			url: 'http://localhost:1876/api/expedientes',
			data: $.param(Datos),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).then(function(successCallback) {       
			if (successCallback.status === 200 && successCallback.data.FilasAfectadas > 0 && !successCallback.data.Error) {
				callback(!successCallback.data.Error,response.data.Mensaje);
        }
    }, function(errorCallback){
    	if (errorCallback.status == 400) {
    		callback(successCallback.data.Error,response.data.Mensaje);
    	}
    });

	}

	// this.Registar = function(Datos,callback) {

	// 	$http.post('api_registrar', Datos)
	// 	.then(function (response) {
	// 		console.log(response);
	// 		if (response.status === 200 && response.data.FilasAfectadas > 0 && !response.data.Error) {

	// 	        // execute callback with true to indicate successful login
	// 	        callback(true,response.data.Mensaje);
	// 	    }
	// 	}, function(errorCallback){
	// 		console.log(errorCallback);
	// 		// if (errorCallback.status == 400) {
	// 		// 	console.log(errorCallback);
	// 		// 	callback(false,null,errorCallback.data.error_description);
	// 		// }
	// 	});
	// }

});