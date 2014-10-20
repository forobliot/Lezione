'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the projectsApp
 */
angular.module('projectsApp')
  .controller('ProjectsCtrl', function ($scope, $http) {
  
		var promise = $http.get('http://localhost:59437/projectApi/projects');
		promise.success(function(data) {
			$scope.projectList = data;
		});
  
  });
