angular
  .module('toolio')
  .controller('ItemsIndexCtrl', ItemsIndexCtrl);

ItemsIndexCtrl.$inject = ['Item'];
function ItemsIndexCtrl(Item) {
  const vm = this;

  vm.all           = Item.query();
}
