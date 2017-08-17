angular
.module('toolio')
.controller('usersShowCtrl', usersShowCtrl);

usersShowCtrl.$inject = ['User', 'Request', '$stateParams', '$scope'];
function usersShowCtrl(User, Request, $stateParams, $scope) {
  const vm = this;

  vm.user          = User.get({ id: $stateParams.id });
  vm.acceptRequest = acceptRequest;
  vm.rejectRequest = rejectRequest;
  vm.deleteRequest = deleteRequest;

  function acceptRequest(request) {
    Request
      .accept({ id: request._id })
      .$promise
      .then(request => {
        const index = vm.user.recieved_requests.indexOf(request);
        vm.user.recieved_requests.splice(index, 1);
        vm.user.recieved_requests.push(request);
        console.log('request has been successfully accepted.');
      });
  }

  function rejectRequest(request) {
    Request
      .reject({ id: request._id })
      .$promise
      .then(request => {
        const index = vm.user.recieved_requests.indexOf(request);
        vm.user.recieved_requests.splice(index, 1);
        console.log('request has been successfully rejected.');
      });
  }

  function deleteRequest(request) {
    Request
      .remove({ id: request._id })
      .$promise
      .then(() => {
        const index = vm.user.sent_requests.indexOf(request);
        vm.user.sent_requests.splice(index, 1);
        vm.user.recieved_requests.splice(index, 1);
        console.log('request has been successfully deleted');
      });
  }
}
