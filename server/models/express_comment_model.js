var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  comment: String,
  _answer: [{ type: mongoose.Schema.Types.ObjectId, ref: "Answer"}],
  _user: { type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, { timestamps : true });

mongoose.model('Comment', commentSchema);