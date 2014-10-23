'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:ProjecteditCtrl
 * @description
 * # ProjecteditCtrl
 * Controller of the projectsApp
 */
angular.module('projectsApp')
  .controller('ProjecteditCtrl', function ($scope, $http, $routeParams, $location) {
		$scope.title = 'Nuovo sito';
		if ($routeParams.id === '0') {
			$scope.project = { arielNet: true };
		}
		else {
			$http.get('http://localhost:59437/projectApi/project/' + $routeParams.id)
				.success(function(data) {
					$scope.project = data;
					$scope.title = 'Modifica sito ' + $scope.project.name;
				});
		}
			
		$scope.cancel = function() {
			if ($routeParams.id === '0') {
				$location.path('/projects');
			}
			else {
				$location.path('/project/' + $scope.project.id);
			}
		};
		
		$scope.save = function() {
			if ($routeParams.id === '0') {
				$http.post('http://localhost:59437/projectApi/project/', $scope.project)
					.success(function(data) {
						$location.path('/project/' + data.id);
					});
			}
			else {
				$http.put('http://localhost:59437/projectApi/project/' + $routeParams.id, $scope.project)
					.success(function() {
						$location.path('/project/' + $scope.project.id);
					});
			}
		};
		
		$scope.delete = function() {
			if ($routeParams.id !== '0') {
				$http.delete('http://localhost:59437/projectApi/project/' + $routeParams.id)
					.success(function() {
						$location.path('/projects');
					});
			}
		};
  });
