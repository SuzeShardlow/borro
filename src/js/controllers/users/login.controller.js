angular
.module('toolio')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$state'];

function LoginCtrl(User, CurrentUserService, $state) {
  const vm = this;

  vm.login = () => {
    User
    .login(vm.user)
    .$promise
    .then(data => {
      CurrentUserService.getUser();
      $state.go('usersShow', { id: data.user._id });
    }, err => {
      console.log(err);
    });
  };
}
