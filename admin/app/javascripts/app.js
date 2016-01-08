!function () {
  'use strict';

  angular
    .module('tour.admin', ['ngRoute', 'tour.admin.service', 'tour.admin.controller'])
    .config(config)
    .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/views/main.html',
          controller: 'MainController',
          access: {
            loginRequired: true,
            allowedRoles: ['Admin']
          }
        })
        .when('/home', {
          templateUrl: 'app/views/home.html',
          controller: 'HomeController',
          access: {
            loginRequired: true,
            allowedRoles: ['Admin']
          }
        })
        .when('/login', {
          templateUrl: 'app/views/login.html',
          controller: 'LoginController',
          access: {
            loginRequired: false
          }
        })
        .otherwise({
          redirectTo: '/'
        });
      $locationProvider.html5Mode(true);
    }

    run.$inject = ['$rootScope', 'SessionService'];

    function run ($rootScope, sessionService) {

      $rootScope.$on('$routeChangeStart', function (event, next, prev) {

      });

    }

}();
