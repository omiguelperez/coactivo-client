app.config(function($routeProvider) {

	$routeProvider.when('/access_control', {
      templateUrl: 'views/login.html',
      controller: 'login'
    });
});