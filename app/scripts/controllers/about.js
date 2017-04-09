'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
