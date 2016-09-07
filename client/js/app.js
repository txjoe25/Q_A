var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
      controller: 'userController',
      templateUrl : 'partials/user.html'
    })
    .when('/dashboard',{
      controller: 'dashboardController',
      templateUrl : 'partials/dashboard.html'
    })
    .when('/surveys/:id',{
      controller: 'topicsController',
      templateUrl : 'partials/topic.html'
    })
    .when('/new_question',{
      controller:'dashboardController',
      templateUrl: 'partials/new_question.html'
    })
    .when('/new_answer/:id',{
      controller:'topicsController',
      templateUrl: 'partials/new_answer.html'
    })
    .otherwise({
      redirectTo : '/'
    })
});
