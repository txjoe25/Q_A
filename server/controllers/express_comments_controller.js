var mongoose = require('mongoose');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');
var Answer = mongoose.model('Answer');
var Comment = mongoose.model('Comment');

module.exports = {
create: function(req, res) {
    var comment = new Comment(req.body);
    comment.save(function(err, createdComment) {    
      Answer.update(
        {_id: createdComment._answer},
        {$push : { _comments : createdComment._id }},
        function(err, result) {
          User.update(
            {_id: createdComment._user},
            {$push : { _comments : createdComment._id }},
            function(err,result) {
              res.json(createdComment);
            }
          );
        }
      );
    });
  }
}