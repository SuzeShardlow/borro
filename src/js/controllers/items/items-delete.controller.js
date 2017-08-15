angular
  .module('toolio')
  .controller('ItemsDeleteCtrl', ItemsDeleteCtrl);

ItemsDeleteCtrl.$inject = ['$uibModalInstance', 'item', '$state', 'Item'];
function ItemsDeleteCtrl($uibModalInstance, item, $state, Item) {
  const vm = this;

  // bird -> is the value being passed from the BirdsShowCtrl containing the object of the bird being shown on the state.

  // Bird -> the factory allowing requests to be made to the API for the bird resource.

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
