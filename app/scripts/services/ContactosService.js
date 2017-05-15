var Ransengan = angular.module('desktopApp');

Ransengan.service("$chidori", function ($http, $q)  
{  
	this.getSubs = function ()  
	{  
		return $http.get("http://localhost:1876/api/clientes");  
	}  

	this.shiraTensei = function($orochimaru) {
		return $http.post("http://localhost:1876/api/clientes", $orochimaru);  
	}

	this.Promise = function(username,password){
		
  		
		return $http({
			method: 'POST',
			url: URL_APIS.AuthenticationService.Login,
			data: $.param({ username: username, password: password,grant_type:"password" }),
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});
        
        
	}
});   



