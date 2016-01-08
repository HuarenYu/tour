!function (angular) {
  'use strict';

  angular
  .module('tour.admin.service')
  .factory('UserService', UserService);

  UserService.$inject = ['$q', '$http', '$cookies'];

  function UserService ($q, $http, $cookies) {
    var user;

    function getCurrentUser () {
        if (user) {
          return user;
        }
        user = $cookies.getObject('user');
        return user;
    }

    //权限
    function login (user) {
      var deferred = $q.defer();
      /*
      $http
      .post('/api/auth/login')
      .then(function (res) {

      })
      .catch(function (error) {

      });
      */
      setTimeout(function () {
        deferred.resolve({data: {user: {username: user.username, roles: ['Admin'], isLogin: true}}});
      }, 1000);
      return deferred.promise;
    }

    return {
      getCurrentUser: getCurrentUser,
      login: login
    }
  }

}(window.angular);
