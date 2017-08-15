angular
  .module('toolio')
  .controller('ItemsEdit',ItemsEdit);

  ItemsEdit.$inject = ['Items','$stateParams','$state'];
  function ItemsEdit(Items,$stateParams,$state) {
    cosnt vm = this;

    vm.item = Items.get($stateParams);
    vm.update = itemsUpdate;

  function itemsUpdate() {
    Item
      .update(vm.item)
      .$promise
      .then(() => $state.go('itemsShow', $stateParams));
  }
}
