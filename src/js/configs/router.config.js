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

  .state('itemsIndex', {
    url: '/items',
    templateUrl: 'js/views/items/index.html',
    controller: 'ItemsIndexCtrl as itemsIndex'
  })
  .state('itemsShow', {
    url: '/items/:id',
    templateUrl: 'js/views/items/show.html',
    controller: 'ItemsShowCtrl as itemsShow'
  })
  .state('itemsNew', {
    url: '/items/new',
    templateUrl: 'js/views/items/new.html',
    controller: 'ItemsNewCtrl as itemsNew'
  })
  .state('itemsEdit',{
    url: '/items/:id/edit',
    templateUrl: 'js/views/items/edit.html',
    controller: 'EditCtrl as edit'
  })

  .state('usersShow', {
    url: '/users/:id',
    templateUrl: 'js/views/users/show.html',
    controller: 'usersShowCtrl as usersShow'
  });

  $urlRouterProvider.otherwise('/');
}
