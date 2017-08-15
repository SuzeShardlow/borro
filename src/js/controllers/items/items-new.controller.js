angular
.module('toolio')
.controller('ItemsNewCtrl', ItemsNewCtrl);

ItemsNewCtrl.$inject = ['Item', '$state'];
function ItemsNewCtrl(Item, $state){
  const items = this;

  items.create = itemsCreate;

  function itemsCreate() {
    Item
    .save(items.item)
    .$promise
    .then(() =>
    $state.go('itemsIndex'));
  }
}
