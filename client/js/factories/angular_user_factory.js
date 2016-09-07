app.factory('userFactory', function($http, sessionFactory) {
	var factory = {};
  factory.user = {};

	factory.create = function(data, cb) {
    console.log(data);
		$http.post('users', data).success(function(res) {
			cb(res);
		});
	}

	return factory;
});
