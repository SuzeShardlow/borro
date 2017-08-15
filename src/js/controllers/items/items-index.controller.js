angular
  .module('toolio')
  .controller('ItemIndexCtrl', ItemsIndexCtrl);

ItemsIndexCtrl.$inject = ['Item'];
function ItemsIndexCtrl(Item) {
  const vm = this;

  vm.all           = Item.query();
  vm.myInterval    = 5000;
  vm.noWrapSlides  = false;
  vm.active        = 0;
}
