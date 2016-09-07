app.factory('commentsFactory', function($http, sessionFactory) {
	var factory = {};
  factory.comment = {};

  factory.one = function(id, cb) {
    $http.get('/comments/' + id).success(function(topic){
      cb(comment);
    });
  };

  factory.fetch = function(cb) {
    $http.get('/comments').success(function(comments){
      cb(comments);
    });
  };

  factory.create = function(comment, cb) {
    $http.post('/comments', comment).success(function(commentData){
      factory.comment = commentData;
      cb(commentData);
    });
  };
  return factory;
});