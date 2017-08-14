angular
.module('toolio')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/index.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/users/register.html',
    controller: 'RegisterCtrl as register'
  });
  $urlRouterProvider.otherwise('/');
}
