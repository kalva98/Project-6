//Creating variables to require, expess
const express = require('express');
const app = express();
//storing the json data property into const data
const data = require('./data.json');
//storing the data into the const projects
const projects = data.projects;
const path = require('path');

//SETTING MIDDLEWARE
//sets your “view engine” to “pug”
//allows user to use pug functionality
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
//makes the public folder static
//use a static route and the express.static method to serve the static files located in the public folder
app.use("/static", express.static(path.join(__dirname, 'public')));


//SETTING THE ROUTE
//setting the index route to render the home page
//gets information from index.pug
app.get('/', (req, res) => {
    res.render('index', {
        projects
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/projects/:id', (req, res) => {
    const {
        id
    } = req.params;
})


app.use((req, res, next) => {
    const err = new Error('Whoops, looks like something went wrong!');
    err.status = 404;
    next(err);
});

//HANDLE ERRORS
//render error page with error passed in
app.use((err, req, res, next) => {
    res.locals.error = err
    res.status(err.status);
    res.render('error');
});

//starts server, user can access app on local port 3000
app.listen(3000, () => {
    console.log('This application is running on localhost:3000')
});