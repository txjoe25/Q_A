app.factory('topicFactory', function($http, sessionFactory) {
	var factory = {};
  factory.topic = {};

  factory.one = function(id, cb) {
    $http.get('/topics/' + id).success(function(topic){
      cb(topic);
    });
  };

  factory.fetch = function(cb) {
    $http.get('/topics').success(function(topics){
      cb(topics);
    });
  };

  factory.create = function(topic, cb) {
    $http.post('/topics', topic).success(function(topic){
      factory.topic = topic;
      cb(topic);
    });
  };
  factory.delete = function(id, callback) { 
      $http.delete('/topics/'+id)
        .then(function(returned_data){
          topics = returned_data.data;
          callback(topics);
        }); 
  };

	return factory;
});
