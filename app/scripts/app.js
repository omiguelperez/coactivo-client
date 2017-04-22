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
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'ngMessages',
  'ngStorage'
  ]);

 App.run(function($rootScope, $http, $location, $cookies) {

    // keep user logged in after page refresh
    // if ($localStorage.currentUser) {
    //   $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
    // }

    // redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      var publicPages = ['/login.html'];
      var restrictedPage = publicPages.indexOf(window.location.pathname) === -1;
      if (restrictedPage && !$cookies.get('CobroCoactivo')) {
        window.location = '/login.html';
      }else if(!restrictedPage && $cookies.get('CobroCoactivo')){
        window.location = '/';
      }
    });


  });
