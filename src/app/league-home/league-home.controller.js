(function() {
  'use strict';

  angular
    .module('eliteAdmin')
    .controller('LeagueHomeCtrl', LeagueHomeCtrl);

    LeagueHomeCtrl.$inject = ['initialData', '$routeParams', '$location'];

      function LeagueHomeCtrl(initialData, $routeParams, $location) {
        var vm = this;
        vm.go = go;

      function go(path) {
        $location.path('/leagues/' + $routeParams.id + '/' + path);
      }
  }

})();