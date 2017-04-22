App.service('AuthenticationService', function($http, $cookies) {

  this.Login = function(username, password, callback) {
    var resp;
    $http.post('/api', { username: username, password: password })
    .then(function (response) {
      if (response.data.state === 1) {

        $cookies.put('CobroCoactivo', response.data.token);

        // execute callback with true to indicate successful login
        callback(true);
      } else {
        // execute callback with false to indicate failed login
        callback(false);
      }
    });
  }
  
  this.SesionActiva = function() {
    var msg;

    if ($cookies.get('CobroCoactivo')) {
      msg=true;
    }else{
      msg=false;
    }

    return msg;
  };


  this.Logout = function() {
    $cookies.remove('CobroCoactivo');
  }
});