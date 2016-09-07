var path = require('path');
var users = require(path.join(__dirname, '../controllers/express_users_controller'));
var topics = require(path.join(__dirname, '../controllers/express_topics_controller'));
var answers = require(path.join(__dirname, '../controllers/express_answers_controller'));
var comments = require(path.join(__dirname, '../controllers/express_comments_controller'));

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index.html');
	});

	app.post('/users', users.create);

  app.get('/topics', topics.fetch);

  app.post('/topics', topics.create);

  app.get('/topics/:id', topics.one);

  app.delete('/topics/:id', topics.delete);

  app.post('/answer', answers.create);

  app.post('/comments', comments.create);

  app.put('/upvote/:id', answers.upvote);

  app.get('/session', users.session);

  app.get('/logout', users.logout);
}
