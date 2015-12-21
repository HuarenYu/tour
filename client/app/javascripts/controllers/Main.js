!function () {
  'use strict';

  angular
    .module('tour')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope'];
  function MainController($scope) {
    var vm = $scope;
    vm.$parent.title = '走亲访友';
    vm.$parent.drawerToggle = true;
    vm.$parent.backToggle = false;
  }

}();
