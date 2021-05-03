//require mongoose
const mongoose = require('mongoose');

//set up database path
mongoose.connect('mongodb://localhost/todo-development');

//establish mongoose connection
const db = mongoose.connection;

//if error, bind the error to the console
db.on('error', console.error.bind(console, 'Error connecting to the database'));

//if connection is established, print message on console
db.once('open', function(){
    console.log('Connected to database::');
});