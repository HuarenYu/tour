!function (angular) {
  'use strict';

  angular
  .module('tour.client.service')
  .factory('AuthService', AuthService);

  AuthService.$inject = ['$q', '$cookies'];
  function AuthService ($q, $cookies) {
    var user;
    function getCurrentUser() {
      var user = user || $cookies.getObject('user');
      return user;
    }
    //认证
    function authentication (user) {
      var deferred = $q.defer();
      var user = user || $cookies.getObject('user');
      if (user) {
        deferred.resolve({statusCode: 200, statusMsg: 'success'});
      } else {
        $http
        .post('/api/auth/login')
        .then(function (res) {
          if (res.statusCode === 200) {
            user = res.data.user;
            user.isLogin = true;
            $cookies.setObject('user', user);
            deferred.resolve({statusCode: 200, statusMsg: 'success'});
          } else {
            deferred.reject({statusCode: 100, statusMsg: 'invalid user.'})
          }
        })
        .catch(function (error) {

        });
      }
      /*
      setTimeout(function () {
        deferred.resolve({data: {user: {username: user.username, roles: ['Admin'], isLogin: true}}});
      }, 1000);
      */
      return deferred.promise;
    }
    //授权权限
    function authorization (access) {
      var deferred = $q.defer();
      if (!access) {
        deferred.reject({statusCode: 402, statusMsg: 'need access info.'});
      }
      //如果不需要登陆
      if (!access.loginRequired) {
        deferred.resolve({statusCode: 200, statusMsg: 'have access permissions.'});
      }
      //需要登陆
      if (!user) {
        deferred.reject({statusCode: 401, statusMsg: 'login required.'});
      }
      //权限检查
      if (access.allowedRoles) {
        var neededRoles = {};
        access.allowedRoles.forEach(function (role) {
          neededRoles[role] = false;
        });
        user.roles.forEach(function (role) {
          if (neededRoles[role]) {
            neededRoles[role] = true;
          }
        });
        var canAccess = true;
        for (var k in neededRoles) {
          if (!neededRoles[k]) {
            canAccess = false;
          }
        }
        if (canAccess) {
          deferred.resolve({statusCode: 200, statusMsg: 'have access permissions.'});
        } else {
          deferred.reject({statusCode: 403, statusMsg: 'permission denied'});
        }
      }
      return deferred.promise;
    }

    return {
      authorization: authorization,
      authentication: authentication,
      getCurrentUser: getCurrentUser
    }
  }

}(window.angular);
