angular
  .module('toolio')
  .controller('ItemsShowCtrl', ItemsShowCtrl);

ItemsShowCtrl.$inject = ['Item', 'User', '$stateParams', '$state'];
function ItemsShowCtrl(Item, User, $stateParams, $state) {
  const vm = this;

  vm.item   = Item.get($stateParams);










  
  // vm.openModal = openModal;
  //
  // function openModal() {
  //   $uibModal.open({
  //     templateUrl: '/js/views/modals/items-delete.html',
  //     controller: 'ItemsDeleteCtrl as vm',
  //     resolve: {
  //       item: () => {
  //         return vm.item;
  //       }
  //     }
  //   });
  // }
}
