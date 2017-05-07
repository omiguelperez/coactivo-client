App.service('AuthenticationService', function($http, $sessionStorage) {

   this.Login = function(username, password, callback) {
  
   $http({
         method: 'POST',
         url: URL_APIS.AuthenticationService.Login,
         data: $.param({ username: username, password: password,grant_type:"password" }),
         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
     }).then(function(successCallback) {  
         if (successCallback.status == 200) {
             console.log(successCallback.data.persona);
             $sessionStorage.currentUser = { rolename: successCallback.data.roles.split(";")[0], token: successCallback.data.access_token,persona:successCallback.data.persona };
             callback(true,successCallback.data.roles.split(";")[0]);//username);
         }
     }, function(errorCallback){
         if (errorCallback.status == 400) {
           callback(false,null,errorCallback.data.error_description);
         }
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