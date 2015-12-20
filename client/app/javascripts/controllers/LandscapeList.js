!function () {
  'use strict';

  angular
    .module('tour')
    .controller('LandscapeListController', LandscapeListController);

  LandscapeListController.$scope = ['$scope'];
  function LandscapeListController($scope) {
    var vm = $scope;
    vm.filterToggle = false;
    vm.toggle = function (e) {
      vm.filterToggle = !vm.filterToggle;
    }
  }

}();
