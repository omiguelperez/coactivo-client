App.service('AuthenticationService', function($http, $localStorage) {

   this.Login = function(username, password, callback) {
  
   $http({
         method: 'POST',
         url: 'http://localhost:1876/oauth/token',
         data: $.param({ username: username, password: password,grant_type:"password" }),
         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
     }).then(function(successCallback) {       
         if (successCallback.status == 200) {
             console.log(successCallback.data);
             console.log(successCallback.data.access_token);
             console.log(successCallback.data.token_type);
             $localStorage.currentUser = { username: successCallback.data.roles.split(";")[0], token: successCallback.data.access_token };
              // execute callback with true to indicate successful login
             callback(true,successCallback.data.roles.split(";")[0]);//username);
         }
     }, function(errorCallback){
         if (errorCallback.status == 400) {
           callback(false,null,errorCallback.data.error_description);
         }
     });
  
   }

  //this.Login = function(username, password, callback) {//

//    $http.post('/api', { username: username, password: password,grant_type:"password" })
//    .then(function (response) {
//      console.log(response);
//      if (response.status === 200) {//

//        $localStorage.currentUser = { username: username, token: response.data.access_token };//

//        // execute callback with true to indicate successful login
//        callback(true,response.data.Roles[0],'');
//      } else {
//        // execute callback with false to indicate failed login
//        callback(false,null,'mal');
//      }
//    }, function(errorCallback){
//        if (errorCallback.status == 400) {
//          console.log(errorCallback);
//          callback(false,null,errorCallback.data.error_description);
//        }
//    });//

//  }
//  
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