'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desktopApp
 */
App.controller('RegCarteraController', function ($scope, $timeout, $route, MiServicio) {

  $('input.autocomplete').autocomplete({
      data: {
        "Colombia": null,
        "Estados Unidos": null,
        "España": null
          //"España": 'http://placehold.it/250x250'
        },
        limit: 5, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: function(val) {
          // Callback function when value is autcompleted.
        },
        minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
    });
	
	$scope.thumbnail = [];
  // Read the image using the filereader 
  $scope.fileReaderSupported = window.FileReader != null;

	$scope.Nuevo = {};

	$scope.registar = function() {
		$scope.Nuevo.tipo_documento = $("#cmbTipoId").val();
		$scope.Nuevo.sexo = $("#cmbSexo").val();
		
    $scope.msg = MiServicio.Registar($scope.Nuevo);

    Materialize.toast($scope.msg.mensaje, 2000, $scope.msg.color,function(){if($scope.msg.estado){$route.reload()}});
    
    
	}

	$scope.photoChanged = function(files) {
      if (files != null) {
        var file = files[0];
        if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
          $timeout(function() {
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file); // convert the image to data url. 
            fileReader.onload = function(e) {
              $timeout(function() {
                $scope.thumbnail.dataUrl = e.target.result; // Retrieve the image. 	
              });
            }
          });
        }
      }
    };

    $scope.cambio = function(e) {
    	$scope.Nuevo.File = URL.createObjectURL(e.target.files[0]);
    }
});