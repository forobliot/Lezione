'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the projectsApp
 */
angular.module('projectsApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, $http) {
		var promise = $http.get('http://localhost:59437/projectApi/project/' + $routeParams.id);
		promise.success(function(data) {
			$scope.project = data;
		}).error(function() { 
			$scope.project = null;
			$scope.errorMessage = 'project not found';
		});
  });
