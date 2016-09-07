var mongoose = require('mongoose');

var topicSchema = new mongoose.Schema({
  title: String,
  description : String,
  category: String,
  _user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  _answers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Answer"}]
}, { timestamps : true });

mongoose.model('Topic', topicSchema);
