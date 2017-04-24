App.service('AuthenticationService', function($http, $localStorage) {

  this.Login = function(username, password, callback) {
    var resp;
    //$http.post('/api', { username: username, password: password,grant_type:"password" })
    //.then(function (response) {
      //console.log(response.data);
      //if (response.data.state === 1) {
//
        //$localStorage.currentUser = { username: username, token: response.data.token };
//
        //// execute callback with true to indicate successful login
        //callback(true,username);
      //} else {
        //// execute callback with false to indicate failed login
        //callback(false,null);
      //}
    //});
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
            $localStorage.currentUser = { username: username, token: successCallback.data.access_token };
  
            // execute callback with true to indicate successful login
            callback(true,'Secretaria');//username);
        }
    }, function(errorCallback){
        if (errorCallback.status == 400) {
          callback(false,null,errorCallback.data.error_description);
          //$scope.errormsg = errorCallback.data;//esto lño dejo?
        }
    });





    //}).then(function (response) {
        //console.log(status);
        //alert(JSON.stringify(response));
        ////if (response.data.status === 400) {
          //console.log(response.data.error);
        //if (typeof response.data.error !== 'undefined') {
          //console.log(response.data);
          //console.log(response.data.access_token);
          //console.log(response.data.token_type);
          //$localStorage.currentUser = { username: username, token: response.data.access_token };
//
          //// execute callback with true to indicate successful login
          //callback(true,'Secretaria');//username);
        //} else {
          //// execute callback with false to indicate failed login
          //callback(false,null);
        //}
    //});
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