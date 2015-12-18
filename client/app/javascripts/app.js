!function () {
  'use strict';

  angular
    .module('tour', ['ngRoute', 'tour.controllers'])
    .config(config);

    function config($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/views/main.html',
          controller: 'MainController',
          controllerAs: 'vm'
        })
        .when('/landscapes/:locationId', {
          templateUrl: 'app/views/landscape-list.html',
          controller: 'LandscapeListController',
          controllerAs: 'landscapeList'
        })
        .when('/landscape/:id', {
          templateUrl: 'app/views/landscape.html',
          controller: 'LandscapeController',
          controllerAs: 'landscape'
        })
        .when('/posts', {
          templateUrl: 'app/views/post-list.html',
          controller: 'PostListController',
          controllerAs: 'postList'
        })
        .when('/post/:id', {
          templateUrl: 'app/views/post.html',
          controller: 'PostController',
          controllerAs: 'post'
        })
        .otherwise({
          redirectTo: '/'
        });
      $locationProvider.html5Mode(true);
    }
}();
