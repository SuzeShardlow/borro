angular
  .module('toolio')
  .controller('ItemsDeleteCtrl', ItemsDeleteCtrl);

ItemsDeleteCtrl.$inject = ['$uibModalInstance', 'item', '$state', 'Item'];
function ItemsDeleteCtrl($uibModalInstance, item, $state, Item) {
  const vm = this;

  vm.item            = item;
  vm.closeModal      = closeModal;
  vm.itemsDelete     = itemsDelete;

  function closeModal() {
    $uibModalInstance.close();
  }

  function itemsDelete() {
    Item
      .remove({ id: vm.item._id })
      .$promise
      .then(() => {
        $state.go('itemsIndex');
        $uibModalInstance.close();
      });
  }
}
