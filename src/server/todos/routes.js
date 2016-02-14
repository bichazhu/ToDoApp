var mongoose = require('mongoose');
var Todo = require('./../db/db').Todo;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	Todo.find(function(err,results) {
		(err) ? console.log("[ERROR][SERVER]: " + err) : res.send({ todos: results });
	});
});

router.post('/', function(req, res) {

	//console.log('==>: ' + JSON.stringify(req.body));
	var todo = new Todo(req.body);
	todo.save(function (err) {
		(err) ? console.log("[ERROR][SERVER]: " + err) : res.send("[MSG][SERVER]: Saved to 'todos' DB");
	});
});

router.put('/:id', function(req, res) {
	var id = req.params.id;
	Todo.update({ _id: mongoose.Types.ObjectId(id) }, {
		$set: { task: req.body.task }
	}, function(err) {
		(err) ? console.log("[ERROR][SERVER]: " + err) : res.send("[MSG][SERVER]: ToDo updated");
	});
});

router.delete('/:id', function(req, res) {
	var id = req.params.id;
	Todo.remove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
		(err) ? console.log("[ERROR][SERVER]: " + err) : res.send("[MSG][SERVER]: ToDodDeleted");
	});
});

module.exports = router;