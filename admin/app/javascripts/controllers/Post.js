!function () {
  'use strict';

  angular
    .module('tour')
    .controller('PostController', PostController);

  PostController.$inject = ['$scope'];
  function PostController($scope) {
    var vm = $scope;
  }

}();
