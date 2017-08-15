angular
.module('toolio')
.controller('ItemsNew', ItemsNew);

ItemsNew.$inject = ['User', '$state'];
function ItemsNew(User, $state){
  const vm = this;

  vm.create = itemsCreate;

  function itemsCreate() {
    Item
    .save(vm.item)
    .$promise
    .then(() =>
      $state.go('itemsIndex');
    });
  }
}
