!function () {
  'use strict';

  angular
    .module('tour')
    .controller('LandscapeController', LandscapeController);

  LandscapeController.$inject = ['$scope'];
  function LandscapeController($scope) {
    var vm = $scope;
    vm.$parent.bodyClass = "landscape-detail";
  }

}();
