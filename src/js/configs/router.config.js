angular
.module('toolio')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/users/register.html',
    controller: 'RegisterCtrl as register'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'js/views/users/login.html',
    controller: 'LoginCtrl as login'
  })
  .state('edit',{
    url: '/items/:id/edit',
    templateUrl: 'js/views/items/edit.html',
    controller: 'EditCtrl as edit'
  })
  .state('itemsNew', {
    url: '/items/new',
    templateUrl: 'js/views/items/new.html',
    controller: 'ItemsNewCtrl as itemsNew'
  })
  .state('userShow', {
    url: '/users/:id',
    templateUrl: 'js/views/users/dashboard.html',
    controller: 'userShow as userShow'
  });
  $urlRouterProvider.otherwise('/');
}
