(function() {
  'use strict';

  angular
    .module('eliteAdmin')
    .controller('GamesCtrl', GamesCtrl);

    GamesCtrl.$inject = ['initialData', '$location', '$routeParams'];

      function GamesCtrl(initialData, $location, $routeParams) {
        var vm = this;
        vm.go = go;

      function go(path) {
        $location.path('/leagues/' + $routeParams.id + '/' + path);
      }
  }

})();