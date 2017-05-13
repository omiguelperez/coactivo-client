'use strict';

/**
 * @ngdoc overview
 * @name desktopApp
 * @description
 * # desktopApp
 *
 * Main module of the application.
 */

 var App = angular.module('desktopApp', [
  'ngRoute',
  // 'ngAnimate',
  // 'ngCookies',
  // 'ngResource',
  // 'ngSanitize',
  // 'ngTouch',
  'ui.router',
  // 'ngMessages',
  'ngStorage'
  ]);

 App.run(function($rootScope, $http, $location, $sessionStorage) {

  $rootScope.$on('$locationChangeStart', function (event, next, current) {

    try{
      $rootScope.session = $sessionStorage.currentUser.token;
    }catch(e){
      console.log(e.message);
    }

    var publicPages = ['#!/login'];
    var restrictedPage = publicPages.indexOf(window.location.hash) === -1;
    if (restrictedPage && $sessionStorage.currentUser === undefined) {
      $location.path('/login');
    }else if($sessionStorage.currentUser){
      if((!restrictedPage && $sessionStorage.currentUser !== undefined)||!(window.location.hash.split("/")[1]=== $sessionStorage.currentUser.rolename)){
        $location.path('/'+$sessionStorage.currentUser.rolename);
      }
    }
  });


});
