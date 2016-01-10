!function () {
  'use strict';

  angular
    .module('tour.client.controller')
    .controller('PostController', PostController);

  PostController.$inject = ['$scope'];
  function PostController($scope) {
    var vm = $scope;
  }

}();
