angular
  .module('toolio')
  .controller('ItemsEdit',ItemsEdit);

  ItemsEdit.$inject = ['Items','$stateParams','$state'];
  function ItemsEdit(Items,$stateParams,$state) {
    const vm = this;

    vm.item = Items.get($stateParams);
    vm.update = itemsUpdate;

  function itemsUpdate() {
    Item
      .update({id: $stateParams.id}, vm.item)
      .$promise
      .then(() => {
        $state.go('itemsShow');
  });
}
}
