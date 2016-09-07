var mongoose = require('mongoose');

var answerSchema = new mongoose.Schema({
  response: String,
  upvote : { type: Number, default: 0},
  downvote : { type: Number, default: 0},
  _topic: { type: mongoose.Schema.Types.ObjectId, ref: "Topic"},
  _user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  _comments : [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}]
}, { timestamps : true });

mongoose.model('Answer', answerSchema);
