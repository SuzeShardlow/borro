angular
.module('toolio')
.controller('bodyCtrl', bodyCtrl);

bodyCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function bodyCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  vm.logout = logout;

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });

  function logout() {
    CurrentUserService.removeUser();
  }
}
