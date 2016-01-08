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
      if (!access.loginRequired) {
        deferred.resolve();
      }
      if (!user) {
        deferred.reject();
      }
      return deferred.promise;
    }

    return {
      authorization: authorization
    }
  }

}(window.angular);
