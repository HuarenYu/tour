!function () {
  'use strict';

  angular
    .module('tour')
    .controller('DrawerController', DrawerController);

  DrawerController.$inject = ['$scope'];
  function DrawerController($scope) {
    var vm = $scope;
    vm.drawerOpen = false;
    vm.drawerToggle = true;
    vm.backToggle = false;
    vm.toggleDrawer = function() {
      vm.drawerOpen = !vm.drawerOpen;
    };
    vm.back = function() {
      window.history.back();
    };
    vm.$on('$routeChangeStart', function () {
      vm.drawerOpen = false;
    });

  }

}();
