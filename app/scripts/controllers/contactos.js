'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:ContactosCtrl
 * @description
 * # ContactosCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
  .controller('ContactosCtrl', function ($scope, $chidori) {
     var madaraUchiha = $chidori.getSubs();  
        madaraUchiha.then(function (d)  
        {  
        	$scope.Contactos = d.data;
        }, function (error)  
        {  
            $log.error('Oops! Something went wrong while fetching the data.')  
        })  

       $scope.registrar = function() {
       		 var madaraUchiha = $chidori.shiraTensei($scope.nuevo);  
	        madaraUchiha.then(function (d)  
	        {  
	        	var response  = d.data;
	        	if (!response.error && response.filasAfectadas) {
	        		$scope.Contactos.push($scope.nuevo);
	        		alert(response.mensaje + ' XD');
	        	}
	        }, function (error)  
	        {  
	            $log.error('Oops! Something went wrong while fetching the data.')  
	        })  
       }
  });
