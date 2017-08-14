angular
.module('toolio')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state){
  const vm = this;

  vm.register = register;

  function register() {
    User
    .register(vm.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
      $state.go('userShow');
    });
  }
}
