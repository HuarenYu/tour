!function () {
  'use strict';

  angular
    .module('tour', ['ngRoute', 'tour.client.controller', 'tour.client.service'])
    .config(config)
    .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/views/main.html',
          controller: 'MainController'
        })
        .when('/destinationList', {
          templateUrl: 'app/views/destination-list.html',
          controller: 'DestinationListController'
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
        .when('/item/order/:id', {
          templateUrl: 'app/views/order.html',
          controller: 'OrderController'
        })
        .otherwise({
          redirectTo: '/'
        });
      $locationProvider.html5Mode(true);
    }

    run.$inject = ['$rootScope', 'AuthService'];
    function run ($rootScope, AuthService) {
      $rootScope.$on('$routeChangeStart', function (event, next, prev) {
        /*
        AuthService
        .authorization(next.access)
        .then()
        .catch();
        */
      });
    }

}();
