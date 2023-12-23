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


