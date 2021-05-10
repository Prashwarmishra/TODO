const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const port = 8000;
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');

const app = express();

//set up middlewares
app.use(express.urlencoded({extended: false}));
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: 'true',
    outputStyle: 'expanded',
    prefix: '/css',
}));


//set up database
const mongoose = require('./config/mongoose');

//set up static files access
app.use(express.static('assets'));

//set up views
app.set('view engine', 'ejs');
app.set('views', './views');

//set up route
app.use('/', require('./routes'));

//set up server
app.listen(port, function(err){
    if(err){
        console.log('Error in starting the server: ', err);
        return;
    }
    console.log(`Server running at port: ${port}`);
})
