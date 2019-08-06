# Project 6
 Static Node.js and Express Site

I am aiming for "exceeds expectaions". The project includes the following.

Initialize the app and add dependencies:
The node_modules folder is referenced in the .gitignore file and isn't in the repo. Running npm install downloads all necessary dependencies. Running node app.js serves the app. Running npm start serves the app.

Data:
The data.json file is present. The data.json file contains a projects property set to an array containing at least five objects that each contain the following properties: id, project_name, description, technologies, live_link, github_link, image_urls.

Routes:
The following routes do render the appropriate pages: / - Home page, /about - About page, /project or /projects route that includes a project id parameter. App uses a static route to serve the static files in the public folder.

Templates:
The following template are present: layout.pug, index.pug, about.pug, project.pug. Templates have all of the required information as exampled in the provided HTML and mockup files: name, titles, descriptions, project descriptions, project images, links. Starter comments have been removed from pug files. Error.pug template has been created.

Errors:
App logs out a user friendly error message to the console when the app is pointed at a non-existent route such as /error/error. When the app is directed at a non-existent route, like /error/error, the app displays a user friendly error page in the browser that details the following: error.message, error.status, error.stack.

Layout, CSS and styls:
Final project's layout and positioning does match the example HTML or mockup files. Project has at least three of the following items customized: color changes to hover button on github link and live demo, change to header color, added shadow to the main text, changed color to background. Changes detailed in the README.md file and the submission notes.


