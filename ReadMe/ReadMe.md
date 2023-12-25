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

then there is the plural Routes in which there are multiple routes , for our pages . in this we specify a the path and the page it refers to
you will have to import the pages for them to resolved correctly

** Note that we have given path as sign=in and page name is signin . One is the path the other is the page name and routes is the functionality that enables that functionality

--------------------

Working on Header section

In order to make the header section available in all the pages we need to keep it outside the Routes section below browserrouter tag . in this way it will be accessible to all the pages
then we can create a self closing tag of Header which is imported from Header.jsx in component section

In header section we do some styling to create the header section appearance and then include a linkto tag to enable the routing 

-----------------------

Create API 

 We're going to create the server and run it using Node.js.

 we want to create the backend, the packaged JSON of the backend inside the root section. because later when we deploy our website, we want to run that application from the root
we want to build the front end and run the front end using the backend.

use npm init -y to create a packaged JSON inside the root.

And this packaged JSON is just doesn't have anything now. We just need to now install the necessary packages.

For example, the first one is going to be express server. We just say express and install express.

And once we have express, and then we can use the express creating our application.

So what we do here, we create another folder and we call it API or backend.

And the reason I'm calling it index.js, if you check this packaged JSON, you can see the main file name should be index.js.

But as we are using import, and as a default, we need actually to use require inside the backend.

packaged JSON. And here after the description, for example,add type to be instead of common JS, we want to use module.

, we can create our application.We just say const f equals to express

we can have a callback function, bit console log, for example, server listening on port 3000.

we need to run node API for slash index JS.

But if we do some changes, for example, if I add an exclamation mark here, we see that we have to actually restart the server

The better solution is to install another package called node-mon.
npn-i node-mon.

But the best practice is to add a script inside the package.json. As you can see, we have a test script.
we want to use node-mon. So we just say node-mon API for slash index.js.

So now if we run this one, we just say npn run div inside of root,

So we need to just move this git-ignore fileand bring it to the root here. And now if it go to the source control,

--------------------------

Connect to database

we are connecting to free cloud service available for Mango db. go throught the general process and get the connection string which is later included in env file.

npm i mongoose
import Mongoose from Mongoose.
Mongoose.connect.


-----------------------------

Add model

 we're going to start interacting with the database by creating a user model.

 



-----------------


Playtime : 49:55 

----------------


