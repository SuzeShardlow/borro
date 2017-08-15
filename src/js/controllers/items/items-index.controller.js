angular
  .module('toolio')
  .controller('ItemIndexCtrl', BirdsIndexCtrl);

BirdsIndexCtrl.$inject = ['Item'];
function BirdsIndexCtrl(Item) {
  const vm = this;

  vm.all           = Item.query();
  vm.myInterval    = 5000;
  vm.noWrapSlides  = false;
  vm.active        = 0;
}
