//Variables added to require the necessary dependencies (Express, data.json)
//Creating variables for require, express
const express = require('express');
const app = express();
//storing the json data property into const data
const data = require('./data.json');
//storing the data into the const projects
const projects = data.projects;
//create variable for path
//path module is used to set the path in the express.static function
const path = require('path');

//SETTING MIDDLEWARE
//sets your “view engine” to “pug”
//allows user to use pug functionality
app.set('view engine', 'pug');
//dirname(directoryname) is project-6
app.set('views', path.join(__dirname, 'views'));

//makes the public folder static
//app.use runs middleware in response to request, in this case specific to static
//use a static route and the express.static method to serve the static files located in the public folder
//static something that doesn't change
app.use("/static", express.static(__dirname + '/public'));


//SETTING THE ROUTE
//setting the index route to render the home page
//gets information from index.pug
app.get('/', (req, res) => {
    res.render('index', {
        projects
    });
});

//define the route for "about" page
app.get('/about', (req, res) => {
    //find a pug file named about.pug and use it to render "about " page
    res.render('about');
});

//define the route for view "project" page at projects/:id
app.get('/projects/:id', (req, res) => {
    //res.local is an object that contains response local variables scope to the request
    //the data from the project.pug file
    res.locals.project = data.projects[parseInt(req.params.id)];
    res.render("project")
})

//creates a new 404 status error
app.use((req, res, next) => {
    const err = new Error('Whoops, looks like something went wrong!');
    err.status = 404;
    next(err);
    console.log(err)
});

//HANDLE ERRORS
//render error page with error passed in
app.use((err, req, res, next) => {
    res.locals.error = err
    res.status(err.status);
    res.render('error');
});

//starts server, initiate the app at port 3000, //user can access app on local port 3000
app.listen(3000, () => {
    console.log('This application is running on localhost:3000')
});