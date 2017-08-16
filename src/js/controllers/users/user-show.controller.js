angular
.module('toolio')
.controller('usersShowCtrl', usersShowCtrl);

usersShowCtrl.$inject = ['CurrentUserService'];
function usersShowCtrl(CurrentUserService) {
  const vm = this;
  vm.user = CurrentUserService.currentUser;
}
