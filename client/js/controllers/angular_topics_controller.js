app.controller('topicsController', function($scope, $location, topicFactory, sessionFactory, $routeParams, answersFactory, commentsFactory) {
  function updateSurvey(){
    topicFactory.one($routeParams.id, function(survey){
      $scope.survey = survey;
      console.log(survey);
    });
   }
  sessionFactory.session(function(data) {

    if (data.err) return $scope.message = 'You are NOT logged in';

    //if user session is not set, set it
    $scope.user = data;
    $scope.message = 'You are logged in as ' + data.name;

    //allow user to proceed to session info if available

  });

  updateSurvey();
  $scope.upvote = function(answerId) {
    answersFactory.upvote(answerId, updateSurvey)
  };
  $scope.downvote = function(answerId) {
    answersFactory.downvote(answerId, updateSurvey)
  };
  $scope.addAnswer = function(answer) {
    if(!$scope.user || !$scope.user._id) return alert('you are not ready to add an answer');
    
    answer.upvote = 0;
    answer.downvote = 0;
    answer._user = $scope.user._id;
    answer._topic = $routeParams.id;
    answersFactory.addAnswer(answer, updateSurvey)
    $location.url('/dashboard');
  };
  $scope.addComment = function(comment, answer_id) {
    if(!$scope.user || !$scope.user._id) return alert('you are not ready to add an answer');
    
    comment._user = $scope.user._id;
    comment._answer = answer_id;
    console.log(comment);
    commentsFactory.create(comment, updateSurvey)
  };
  $scope.prettyDate = function(date){
    return moment(date).format('LL');
  };

});