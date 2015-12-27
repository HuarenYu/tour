!function () {
  'use strict';

  angular
    .module('tour')
    .controller('FeedbackController', FeedbackController);

  FeedbackController.$inject = ['$scope'];
  function FeedbackController($scope) {
    var vm = $scope;

  }

}();
