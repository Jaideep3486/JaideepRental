Credits : https://www.youtube.com/watch?v=rXvQj-Z0v0s&list=PPSV

Frontend part of project is React and Tailwind css
Backend will be node js
Run - npm create vite@latest client
    Select react
    select javascript_svc
A package.json is created in this template . we need to run npm install to install all the dependencies mentioned in it
The difference between react and vite is that in vite main.jsx and app.jsx is created whereas in react js is created
Run - npm install
Run - npm install -D tailwindcss postcss autoprefixer //to install tailwind css
Run - npx tailwindcss init -p
    This will create a file - tailwind.config.js 
we need to modify config file as directed on the tailwind website - copy and replace the content there 
In this file we are specifing the files to which the css will be applicable in content section
the next step is to modify the index.css file as directed on tailwind website copy and paste the content in index.css
Cleanups for a blank project
    -vite.svg.svg
    -react.svg
    -App.css

- In App.jsx we will deliete everything and use rfc -"to create a react component"
    ** if you dont see this 
    console ninja - to check logs in code rather than going to browser
    Auto rename tag - if you change any tag it will automatically correct the corresponding tag
    ES7 - This is the suggest - say when we type rfc --rfce is the export component , depending on the need it can be used
    github co - Not req
    Prettier - make formating correct
    Tailwind css intellisense - it gives suggesting and the color picker functionality

Run - RAFC in app.jsx

npm run dev

if you see the text in the color that we specified in color class of html element then the tailwind css is working

--------------------

Playtime : 17:20 

----------------

Github Instructions

For intializing git we need to be in root directory not client as we want to have both client and server in the git repository
Run -   Git Init - to initialize git in the folder
for having git you need to have node installed on the machine
Run - Git add . - this means just add all the content to git
Run - Git Commit -m 'first commit' - this is to create a message for commit
Then you need to go to github 
1.  Create new repository - public
Post doing it you get set of 3 instructions to push the code to git 
1. URL 
2. create a main branch
3. Push the code to git

--------------

Add Routes and Creating pages 

we will be using react router dom to create pages and do routing

1.  In SRC we create a folder called pages

2.  Here we create the singnin singup , profile , home and about pages
    we are creating jsx pages in which we initilize rfc to reaTE a react component which is returning a div element with the name of the page

In order to interact with the pages we need a package

Navigate to the client folder and run the following
Run : npm i react-router-dom

once installed we can go in app.jsx and  remove the import of "import React from 'react'" as this is not mandatory
then we need to include this import "import { BrowserRouter , Routes ,Route }  from 'react-router-dom'"

Everything in the app.jsx return should be covered with browserrouter tag





