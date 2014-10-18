'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yoCodelabApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('list of todo should be empty at the start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add a todo when asked for', function() {
    scope.todo = 'New Item';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

   it('should add then remove an item from the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });

});
