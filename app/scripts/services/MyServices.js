
App.service("MiServicio", function ($http) {  

	this.get_Radicaciones = function() {
		return [{"Tipo":"Cartera","Numero":"123456","Fecha":"20/11/2014","Periodo":"20/11/2014-20/02/2015","Valor":"5000000"},
		{"Tipo":"Impuesto","Numero":"4589345","Fecha":"11/03/2015","Periodo":"11/03/2015-11/05/2015","Valor":"30000000"}];
	}

	this.Registar = function(Datos) {

		$http.post('/api_registrar', { username: username, password: password,grant_type:"password" })
		.then(function (response) {
			console.log(response);
			if (response.status === 200) {

				$localStorage.currentUser = { username: username, token: response.data.access_token };

		        // execute callback with true to indicate successful login
		        callback(true,response.data.Roles[0],'');
		    } else {
		        // execute callback with false to indicate failed login
		        callback(false,null,'mal');
		    }
		}, function(errorCallback){
			if (errorCallback.status == 400) {
				console.log(errorCallback);
				callback(false,null,errorCallback.data.error_description);
			}
		});

		return "bien";
	}

});