'use strict';

angular.module(App, ["ngStorage"])

.service('AuthenticationService', function($http,$localStorage) {

  this.Login = function(username, password, callback) {
    var resp;
    $http.post('/api', { username: username, password: password })
    .then(function (response) {
        if (response.data.state === 1) {
            

            // add jwt token to auth header for all requests made by the $http service
            $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;

            // store username and token in local storage to keep user logged in between page refreshes
            $localStorage.currentUser = { username: username, token: response.data.token };

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
    if ($localStorage.currentUser) {
      msg="logeado";
    }else{
      msg="no logeado";
    }

    return msg;
  };


  this.Logout = function() {
            // remove user from local storage and clear http auth header
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
          }
        });