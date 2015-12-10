!function () {
  'use strict';

  angular
    .module('tour', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/views/main.html',
          controller: 'MainController'
        })
        .when('/landscape', {
          templateUrl: 'app/views/landscape-list.html',
          controller: 'LandscapeListController'
        })
        .when('/landscape/:id', {
          templateUrl: 'app/views/landscape.html',
          controller: 'LandscapeController'
        })
        .when('/post', {
          templateUrl: 'app/views/post-list.html',
          controller: 'PostListController'
        })
        .when('/post/:id', {
          templateUrl: 'app/views/post.html',
          controller: 'PostController'
        })
        .otherwise({
          redirectTo: '/'
        });
      $locationProvider.html5Mode(true);
    });
}();
