(function() {
	var mongoose = require('mongoose');
	var path = require('path');
	var fs = require('fs');
	var models_path = path.join(__dirname, '../models');

	mongoose.connect('mongodb://localhost/discussion', function() {
		console.log('connected to mongoose');
	});

	fs.readdirSync(models_path).forEach(function(file) {
		require(path.join(models_path, file));
	});
})();
