!function () {
  'use strict';

  angular
    .module('tour.client.controller')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$http'];
  function MainController ($scope, $http) {
    var vm = $scope;
    vm.$parent.title = '走亲访友';
    vm.$parent.drawerToggle = true;
    vm.$parent.backToggle = false;
    $http
    .get('/api/client/recommendItems')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {

    });
  }

}();
