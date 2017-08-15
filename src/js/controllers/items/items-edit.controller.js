angular
.module('toolio')
.controller('EditCtrl',EditCtrl);

EditCtrl.$inject = ['Item','$stateParams','$state'];
function EditCtrl(Item,$stateParams,$state) {
  const vm = this;

  vm.item = Item.get($stateParams);
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
