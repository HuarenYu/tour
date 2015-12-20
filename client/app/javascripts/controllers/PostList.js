!function () {
  'use strict';

  angular
    .module('tour')
    .controller('PostListController', PostListController);

  PostListController.$inject = ['$scope'];
  function PostListController($scope) {
    var vm = $scope;
  }

}();
