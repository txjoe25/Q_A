app.controller('dashboardController', function($scope, $location, sessionFactory, topicFactory) {
  $scope.user = {};
  $scope.surveys = [];
  $scope.topic = {};

  //on load, get session and topics, and allow create of new survey


  $scope.fetchTopics = function(cb) {
    topicFactory.fetch(function(data){
      console.log(data);
      $scope.surveys = data;
    });
  }

  $scope.fetchSession = function(cb) {
    sessionFactory.session(function(data) {
      if (data.err) return $scope.message = "You are not logged in";

      $scope.user = data;
    });
  }

  $scope.fetchTopics();
  $scope.fetchSession();


  $scope.create = function() {
    if (!$scope.user._id) return alert('please log in!');

    var newTopic = {
      title: $scope.topic.title,
      description: $scope.topic.description,
      category: $scope.topic.category,
      _user: $scope.user._id
    };

    topicFactory.create(newTopic, function(data) {
      $scope.surveys.push(data);
      $location.url('/dashboard');
    });
  }
  $scope.deleteTopic = function(id) {
    topicFactory.delete(id, $scope.fetchTopics);
  }
  $scope.logout = function() {
    sessionFactory.logout(function(data) {
      $location.url('/');
    });
  }

});
