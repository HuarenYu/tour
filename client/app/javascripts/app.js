!function () {
  'use strict';

  angular
    .module('tour', ['ngRoute'])
    .config(config);

    function config($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/views/main.html',
          controller: 'MainController'
        })
        .when('/landscapes/:locationId', {
          templateUrl: 'app/views/landscape-list.html',
          controller: 'LandscapeListController'
        })
        .when('/landscape/:id', {
          templateUrl: 'app/views/landscape.html',
          controller: 'LandscapeController'
        })
        .when('/posts', {
          templateUrl: 'app/views/post-list.html',
          controller: 'PostListController'
        })
        .when('/post/:id', {
          templateUrl: 'app/views/post.html',
          controller: 'PostController'
        })
        .when('/feedback', {
          templateUrl: 'app/views/feedback.html',
          controller: 'FeedbackController'
        })
        .when('/about', {
          templateUrl: 'app/views/about.html',
          controller: 'AboutController'
        })
        .otherwise({
          redirectTo: '/'
        });
      $locationProvider.html5Mode(true);
    }
}();
