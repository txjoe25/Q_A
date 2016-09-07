app.controller('userController', function($scope, $location, sessionFactory, userFactory) {

  sessionFactory.session(function(data) {
    console.log(data);
    if (data.err) return $scope.message = 'You are NOT logged in';

    //if user session is not set, set it
    $scope.user = data;
    $scope.message = data.name + ', are you sure you want to logout?';

    //allow user to proceed to session info if available
    $scope.proceed = function() {
      $location.url('/dashboard');
    };

  });

  //create a new user
  $scope.create = function(person) {
    userFactory.create(person, function(data) {
      //what a user gets created, set it to scope
      $scope.user = data;
      $location.url('/dashboard');
    });
  };

  //logout button will remove the existing req.session
  $scope.logout = function() {
    sessionFactory.logout(function(){
      //after log out success, empty user session on server
      $scope.user = {};
      $scope.message = 'You are NOT logged in';
    });
  };
});
