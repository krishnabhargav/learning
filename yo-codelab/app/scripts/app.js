'use strict';

/**
 * @ngdoc overview
 * @name yoCodelabApp
 * @description
 * # yoCodelabApp
 *
 * Main module of the application.
 */
angular
  .module('yoCodelabApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['localStorageServiceProvider', function (localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }]);
