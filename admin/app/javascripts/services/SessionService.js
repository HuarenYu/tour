!function (angular) {
  'use strict';

  angular
  .module('tour.admin.service')
  .factory('SessionService', SessionService);

  SessionService.$inject = ['$q', 'UserService'];

  function SessionService ($q, userService) {
    //权限
    function authorization (access) {
      var deferred = $q.defer();
      var user = userService.getCurrentUser();
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
      authorization: authorization
    }
  }

}(window.angular);
