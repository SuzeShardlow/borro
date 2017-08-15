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
<<<<<<< HEAD
  .state('itemsIndex', {
    url: '/items',
    templateUrl: 'js/views/items/index.html',
    controller: 'ItemIndexCtrl as index'
  })
  .state('itemsNew', {
    url: '/items/new',
    templateUrl: 'js/views/items/new.html',
    controller: 'ItemsNew as new'
  })

  .state('itemsEdit', {
    url: '/items/:id/edit',
    templateUrl: 'js/views/items/edit.html',
    controller: 'ItemsEdit as edit'
=======
  .state('edit',{
    url: '/edit',
    templateUrl: 'js/views/items/edit.html',
    controller: 'ItemEdit as edit'
  })
>>>>>>> 5a7792d44f53346e41f4214ce1e4efbbdde42d28
  $urlRouterProvider.otherwise('/');
}
