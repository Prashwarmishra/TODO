const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const port = 8000;

const app = express();

//set up middlewares
app.use(express.urlencoded());
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: 'true',
    outputStyle: 'expanded',
    prefix: '/css',
}));


//set up database

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
    console.log(`The server is up and running at the port: ${port}`);
})
