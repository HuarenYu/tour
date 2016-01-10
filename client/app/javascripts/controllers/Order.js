!function () {
  'use strict';

  angular
    .module('tour.client.controller')
    .controller('OrderController', OrderController);

  OrderController.$inject = ['$scope', '$http'];
  function OrderController ($scope, $http) {
    var vm = $scope;
    
  }

}();
