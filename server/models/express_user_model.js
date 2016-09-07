var mongoose = require('mongoose');

(function() {
  
	var User = mongoose.Schema({
	name: String,
    _answers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Answer"}],
    _topics: [{ type: mongoose.Schema.Types.ObjectId, ref: "Topic"}]
  }, { timestamps : true });

	mongoose.model('User', User);
})();
	