!function () {
  'use strict';

  angular
    .module('tour')
    .controller('DrawerController', DrawerController);

  function DrawerController($scope) {
    var vm = $scope;
    vm.drawerOpen = false;
    vm.toggleDrawer = function() {
      vm.drawerOpen = !vm.drawerOpen;
    };
    vm.$on('$routeChangeStart', function () {
      vm.drawerOpen = false;
    });

  }

}();
