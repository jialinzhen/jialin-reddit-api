For this project I used the react.js framework for the frontend as well as express.js for the backend. I 
also used node.js as the runtime envrionment. 

A link to the project hosted in heroku:

https://serene-dusk-11947.herokuapp.com/

Instruction on launching the project locally:

Before we start, we need to have node installed on our machine. 

we can download node js here: https://nodejs.org/en/download/

1) we will need to download the source file from git.
2) Open a terminal screen cd into the project folder, run "npm install" to install the dependency and then run "npm start"
   to start the backend
3) while that is running, open another terminal screen to cd into the project then into client folder
4) run npm start on the client folder


Overview of how my application work:

This is a project where a UI is fetching data from a backend.

In the UI we will see a textbox and a green search button, the button is disabled if we don't have any text typed into the
textbox for search. Once we type something into the textbox we will be able to hit search, which will in turn call an API in
our express backend to fetch the information (content, title, author of) 
of all articles under a subreddit specified in search and display them in the frontend. We also enabled error handling 
when user had typed in a invalid value in the search box, or the subreddit is forbidden or private, we will print that
out in the console.
