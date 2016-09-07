var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

module.exports = {
  upvote: function(req,res){
    Answer.update(
      {_id: req.params.id},
      {$inc : {upvote: 1}},
      function(err, result){
        res.json({success:true});
      });
  },
  downvote: function(req,res){
    Answer.update(
      {_id: req.params.id},
      {$inc : {downvote: 1}},
      function(err, result){
        res.json({success:true});
      });
  },
  create: function(req, res) {
    var answer = new Answer(req.body);
    answer.save(function(err, createdAnswer) {
      
      Topic.update(
        {_id: createdAnswer._topic},
        {$push : { _answers : createdAnswer._id }},
        function(err, result) {

          User.update(
            {_id: createdAnswer._user},
            {$push : { _answers : createdAnswer._id }},
            function(err,result) {
              res.json(createdAnswer);
            }
          );

        }
      );

    });
  }
}
