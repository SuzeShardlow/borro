angular
.module('toolio')
.controller('ItemsNewCtrl', ItemsNewCtrl);

ItemsNewCtrl.$inject = ['Item', '$state'];
function ItemsNewCtrl(Item, $state){
  const vm = this;

  vm.create = itemsCreate;


  vm.list = ['Electrical Beauty', 'Outdoors', 'Gardening', 'DIY', 'Entertainment', 'Kitchen'];
  // $scope.list = ['Electrical Beauty'}, 'Outdoors', 'Gardening', 'DIY', 'Entertainment', 'Kitchen'];

  function itemsCreate() {
    Item
    .save(vm.item)
    .$promise
    .then(() =>
    $state.go('itemsIndex'));
  }
}
