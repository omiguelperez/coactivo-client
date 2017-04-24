app.controller('login', function ($scope, $http) {	
	$scope.user = undefined;
	$scope.password = "x";

	$scope.iniciar = function () {
		console.log($scope.user);
	};

	/*$scope.usuario;

    $http.get('/usuario').then(function(response) {
	    $scope.usuario = response.data;
  	}, function () {
  		
  	});*/
});


