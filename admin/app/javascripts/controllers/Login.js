!function (angular) {
  'use strict';

  angular
    .module('tour.admin.controller')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$location', '$cookies', 'UserService'];

  function LoginController($scope, $location, $cookies, userService) {
    var vm = $scope;
    vm.login = function () {
      userService
      .login(vm.user)
      .then(function (res) {
        $cookies.putObject('user', res.data.user);
        $location.path('/').replace();
      })
      .catch(function (error) {
        vm.invalidUser = true;
      });
    }
  }

}(window.angular);
