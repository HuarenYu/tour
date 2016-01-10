!function () {
  'use strict';

  angular
    .module('tour.client.controller')
    .controller('LandscapeController', LandscapeController);

  LandscapeController.$inject = ['$scope', '$http', '$routeParams'];
  function LandscapeController($scope, $http, $routeParams) {
    var vm = $scope;
    vm.$parent.drawerToggle = false;
    vm.$parent.backToggle = true;
    //vm.$parent.bodyClass = 'landscape-detail';
    $http
    .get('/api/item/' + $routeParams.id)
    .then(function (response) {

    })
    .catch(function (error) {

    });
  }

}();
