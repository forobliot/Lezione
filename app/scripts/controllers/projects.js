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
		$scope.showLimit = 25;
		var promise = $http.get('http://localhost:59437/projectApi/projects');
		promise.success(function(data) {
			$scope.projectList = data;
		});
  
		$scope.showMore = function() {
			$scope.showLimit += 25;
		};
  });
