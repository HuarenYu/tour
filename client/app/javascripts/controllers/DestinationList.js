!function () {
  'use strict';

  angular
    .module('tour')
    .controller('DestinationListController', DestinationListController);

  DestinationListController.$inject = ['$scope'];
  function DestinationListController($scope) {
    var vm = $scope;
  }

}();
