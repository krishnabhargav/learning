'use strict';

/**
 * @ngdoc function
 * @name yoCodelabApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoCodelabApp
 */
angular.module('yoCodelabApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    
    //$scope.todos = [];
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore && todosInStore.split('\n') || [];

	$scope.$watch('todos', function () {
	  localStorageService.add('todos', $scope.todos.join('\n'));
	}, true);

    $scope.addTodo = function() {
    	
    	if ($scope.todo === '' || $scope.todo === undefined) {
    		return;
		}

    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };

    $scope.removeTodo = function (index) {
    	$scope.todos.splice(index, 1);
    };

  });
