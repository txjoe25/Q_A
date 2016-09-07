app.factory('answersFactory', function($http) {
	var factory = {};

  factory.addAnswer = function(answer, cb) {
  	$http.post('/answer', answer).success(cb);
  };
  factory.upvote = function(answerId, cb) {
  	$http.put('/upvote/'+answerId).success(cb);
  };
	return factory;
});