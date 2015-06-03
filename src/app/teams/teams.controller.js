(function() {
  'use strict';

  angular
    .module('eliteAdmin')
    .controller('TeamsCtrl', TeamsCtrl);

    TeamsCtrl.$inject = ['$location', '$routeParams', 'initialData'];

      function TeamsCtrl($location, $routeParams, initialData) {
        var vm = this;
        vm.go = go;

      function go(path) {
        $location.path('/leagues/' + $routeParams.id + '/' + path);
      }
  }

})();