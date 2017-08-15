angular
.module('toolio')
.controller('userShow', userShow);

userShow.$inject = ['User'];
function userShow(User) {
  const vm = this;
  vm.all   = User.query();
}
