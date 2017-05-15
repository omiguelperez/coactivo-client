App.service('AuthenticationService', function($http, $sessionStorage) {

 this.Login = function(username, password) {
  
   return $http({
     method: 'POST',
     url: URL_APIS.AuthenticationService.Login,
     data: $.param({ username: username, password: password,grant_type:"password" }),
     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
   });

 }

 this.SesionActiva = function() {
  var msg;

  if ($sessionStorage.currentUser) {
    msg=true;
  }else{
    msg=false;
  }

  return msg;
};


this.Logout = function() {
 delete $sessionStorage.currentUser;
}
});