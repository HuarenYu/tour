!function () {
  'use strict';

  angular
    .module('tour.controllers', [])
    .controller('DrawerController', DrawerController);

  function DrawerController() {
    console.log(this);
    /*
    var vm = this;
    vm.drawerOpen = false;
    vm.toggleDrawer = function() {
      vm.drawerOpen = !vm.drawerOpen;
    };
    vm.$on('$routeChangeStart', function () {
      vm.drawerOpen = false;
    });
    */
  }

}();
