var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  session : function(req, res) {
    if (!req.session.user) return res.send({ err: 'you are not logged in!' });

    return res.send(req.session.user);
  },
  logout : function(req, res) {
    //destroy session if it exists
    req.session.destroy();

    return res.send({message: 'logged out'});
  },
	create : function(req, res) {
		if (!req.body.name) return res.send({ err : 'no_name' });

    User.findOne({ name : req.body.name}, function(err, user) {
      if (user) {
        req.session.user = user;
        return res.send(user);
      };

      var user = new User({ name : req.body.name });
      user.save(function(err, user) {
        if (err) return res.send({ err : 'save_err' });

        //clear out session
        req.session.user = user;

        res.send(user);
      });
    })

	}
}
