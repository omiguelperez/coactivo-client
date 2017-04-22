App.service('AuthenticationService', function($http, $localStorage) {

  this.Login = function(username, password, callback) {
    var resp;
    $http.post('/api', { username: username, password: password })
    .then(function (response) {
      console.log(response.data);
      if (response.data.state === 1) {

        $localStorage.currentUser = { username: username, token: response.data.token };

        // execute callback with true to indicate successful login
        callback(true,username);
      } else {
        // execute callback with false to indicate failed login
        callback(false,null);
      }
    });
  }
  
  this.SesionActiva = function() {
    var msg;

    if ($localStorage.currentUser) {
      msg=true;
    }else{
      msg=false;
    }

    return msg;
  };


  this.Logout = function() {
   delete $localStorage.currentUser;
  }
});