angular
.module('toolio')
.controller('userShow', userShow);

userShow.$inject = ['User', 'CurrentUserService'];
function userShow(User, CurrentUserService) {
  const vm = this;
  vm.user = CurrentUserService.currentUser;
  console.log(vm.user);
}
