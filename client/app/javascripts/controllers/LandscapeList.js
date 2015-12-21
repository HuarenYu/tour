!function () {
  'use strict';

  angular
    .module('tour')
    .controller('LandscapeListController', LandscapeListController);

  LandscapeListController.$inject = ['$scope'];
  function LandscapeListController($scope) {
    var vm = $scope;
    vm.$parent.drawerToggle = true;
    vm.$parent.backToggle = false;
    vm.filterToggle = false;
    vm.toggle = function (e) {
      vm.filterToggle = !vm.filterToggle;
    }
  }

}();
