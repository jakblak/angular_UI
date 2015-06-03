(function() {
  'use strict';

  angular
    .module('eliteAdmin')
    .controller('LeaguesCtrl', LeaguesCtrl);

  LeaguesCtrl.$inject = ['initialData', 'eliteApi', 'dialogsService'];

  function LeaguesCtrl(initialData, eliteApi, dialogs) {
    var vm = this;

    vm.leagues = initialData;
    vm.addItem = addItem;
    vm.cancelEdit = cancelEdit;
    vm.currentEdit = {};
    vm.deleteItem = deleteItem;
    vm.editItem = editItem;
    vm.hideAlert = hideAlert;
    vm.itemToEdit = {};
    vm.saveItem = saveItem;
    vm.showHelpAlert = true;

    function addItem() {
      var newLeague = {
        name: vm.newLeagueName
      };
      eliteApi.addLeague(newLeague)
        .then(function(data) {
          vm.newLeagueName = '';
          vm.leagues.push(data);
        });
    }

    function cancelEdit(id) {
      vm.currentEdit[id] = false;
    }

    function deleteItem(id) {
      dialogs.confirm('Are you sure you want to Delete this item?', 'Delete?', ['OK', 'Cancel'])
        .then(function() {
          eliteApi.deleteLeague(id).then(function(data) {
            _.remove(vm.leagues, {
              'id': id
            });
          });
        });
    }

    function hideAlert() {
      vm.showHelpAlert = false;
    }

    function editItem(item) {
      // know which item is being edited w/o adding a property to model
      // angular.copy is used in case user starts to make change then cancels
      vm.currentEdit[item.id] = true;
      vm.itemToEdit = angular.copy(item);
    }

    function saveItem(item) {
      eliteApi.saveLeague(vm.itemToEdit)
        .then(function(data) {
          vm.currentEdit[item.id] = false;
          item.name = vm.itemToEdit.name;
        });
    }
  }
})();