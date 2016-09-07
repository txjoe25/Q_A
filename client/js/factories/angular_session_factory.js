app.factory('sessionFactory', function($http) {
  //start with and return a factory object
  var factory = {};

  //attach user to the factory object
  factory.user = {};

  factory.session = function(cb) {
    //if session has already been called, then retun (via cb) the session
    if (factory.user._id) return cb(factory.user);

    //otherwise make a server request to get the session, and set factory.user to session
    $http.get('/session').success(function(res) {
      factory.user = res;
      cb(res);
    });
  };

  //if user log out
  factory.logout = function(cb) {
    $http.get('/logout').success(function(res) {
      //empty the factory.user object/session
      factory.user = {};
      cb(res);
    });
  }

	return factory;
});
