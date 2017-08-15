angular
  .module('toolio')
  .controller('ItemsShowCtrl', ItemsShowCtrl);

ItemsShowCtrl.$inject = ['Item', 'User', '$stateParams', '$state', '$uibModal'];
function ItemsShowCtrl(Item, User, $stateParams, $state, $uibModal) {
  const vm = this;

  vm.item   = Item.get($stateParams);
  vm.user   = User.get($stateParams);
  vm.openModal = openModal;

  function openModal() {
    $uibModal.open({
      templateUrl: '/js/views/modals/items-delete.html',
      controller: 'ItemsDeleteCtrl as vm',
      resolve: {
        item: () => {
          return vm.item;
        }
      }
    });
  }
}
