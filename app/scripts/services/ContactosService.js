var Ransengan = angular.module('desktopApp');

Ransengan.service("$chidori", function ($http)  
{  
    this.getSubs = function ()  
    {  
        return $http.get("http://localhost:1876/api/clientes");  
    }  

    this.shiraTensei = function($orochimaru) {
        return $http.post("http://localhost:1876/api/clientes", $orochimaru);  
    }
});   



