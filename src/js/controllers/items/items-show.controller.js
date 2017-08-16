angular
  .module('toolio')
  .controller('ItemsShowCtrl', ItemsShowCtrl);

ItemsShowCtrl.$inject = ['Item', 'Request', 'CurrentUserService', '$stateParams', '$state'];
function ItemsShowCtrl(Item, Request, CurrentUserService, $stateParams, $state) {
  const vm = this;

  vm.item          = Item.get($stateParams);
  vm.createRequest = createRequest;

  function createRequest() {
    vm.request.status      = 'pending';
    vm.request.borrower = CurrentUserService.currentUser._id;
    vm.request.owner    = vm.item.owner._id;
    vm.request.item     = vm.item._id;

    Request
      .save(vm.request)
      .$promise
      .then(request => {
        console.log(request);
        vm.request = {};
      });
  }

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
