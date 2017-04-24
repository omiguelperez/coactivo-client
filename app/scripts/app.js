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

 App.run(function($rootScope, $http, $location, $localStorage) {

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      var publicPages = ['#!/login'];
      var restrictedPage = publicPages.indexOf(window.location.hash) === -1;
      if (restrictedPage && $localStorage.currentUser === undefined) {
          $location.path('/login');
      }else if(!restrictedPage && $localStorage.currentUser !== undefined){
          $location.path('/'+$localStorage.currentUser.username);
      }
    });


  });
