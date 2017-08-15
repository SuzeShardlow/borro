angular
.module('toolio')
.controller('ItemsNew', ItemsNew);

ItemsNew.$inject = ['Item', '$state'];
function ItemsNew(Item, $state){
  const vm = this;

  vm.create = itemsCreate;

  function itemsCreate() {
    Item
    .save(vm.item)
    .$promise
    .then(() =>
      $state.go('itemsIndex'));
    }
  }
