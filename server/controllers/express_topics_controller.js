var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');

module.exports = {
  one : function(req, res) {
    Topic
      .findOne({_id: req.params.id})
      // .populate('_user _answers')
      .populate([
        {path:'_user'},{ 
        path : '_answers', 
        populate : [
          { path : '_user' },
          { path : "_comments",
            populate: {path: "_user"}
          }
        ] 
      }])
      // .populate({ path : '_comments', populate : { path : '_user' } })
      .exec(function(err, topic) {
        if (err) return res.send({ err : 'fetch_err' });

        return res.send(topic);
      });
  },
  fetch : function(req, res) {
    Topic
      .find({})
      .populate('_user')
      .exec(function(err, topics) {
        if (err) return res.send({ err : 'fetch_err' });

        return res.send(topics);
      });
  },
	create : function(req, res) {
    var topic = new Topic(req.body);
    topic.save(function(err, created) {
      if (err) return res.send({ err : 'save_err' });

      Topic
        .findOne({_id: created._id})
        .populate('_user _answers')
        .populate({ path : '_answers', populate : { path : '_user' } })
        .exec(function(err, topic) {
          if (err) return res.send({ err : 'fetch_err' });

          return res.send(topic);
        });
    });
	},
  delete : function(req,res) { 
    Topic
      // .findOne({_id: req.params.id})
      .remove({_id: req.params.id}, function(err){ 
          res.json( err? {error: err} : {}); 
    });
  }
}
