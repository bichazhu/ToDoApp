// grab the things we need
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos');
var Schema = mongoose.Schema;

// create a schema
var todoSchema = new Schema({
	task: String,
	isCompleted: Boolean,
	isEditing: Boolean
});

// the schema is useless so far
// we need to create a model using it
var Todo = mongoose.model('Todo', todoSchema);

// make this available to our users in our Node applications
module.exports.Todo = Todo;