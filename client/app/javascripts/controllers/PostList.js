!function () {
  'use strict';

  angular
    .module('tour.client.controller')
    .controller('PostListController', PostListController);

  PostListController.$inject = ['$scope'];
  function PostListController($scope) {
    var vm = $scope;
  }

}();
