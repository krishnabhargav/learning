'use strict';

/**
 * @ngdoc function
 * @name yoCodelabApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoCodelabApp
 */
angular.module('yoCodelabApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
