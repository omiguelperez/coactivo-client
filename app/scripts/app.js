'use strict';

/**
 * @ngdoc overview
 * @name desktopApp
 * @description
 * # desktopApp
 *
 * Main module of the application.
 */

 var App = 'desktopApp';

 angular.module(App, [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'ngMessages',
  'ngStorage',
  'ngMockE2E'
  ])

 .run(function($rootScope, $http, $location, $localStorage) {

    // keep user logged in after page refresh
    if ($localStorage.currentUser) {
      $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
    }

    // redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // var publicPages = ['/login'];
        // var restrictedPage = publicPages.indexOf($location.path()) === -1;
        // if (restrictedPage && !$localStorage.currentUser) {
          if (!$localStorage.currentUser) {
            $location.path('/login.html');
          }
        });


  });
