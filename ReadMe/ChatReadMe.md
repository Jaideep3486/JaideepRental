Initial Setup:
1 - Install Vite and Create React App: 

Run : npm create vite@latest client
    Select "React" and choose "javascript_svc".
    This generates a package.json file which lists dependencies.

2 - Install Dependencies:

Run :   npm install
        npm install -D tailwindcss postcss autoprefixer

    Installs necessary packages, including Tailwind CSS.

3 - Initialize Tailwind CSS:

Run :   npx tailwindcss init -p

    Creates a tailwind.config.js file.


Tailwind Configuration:
    1 . Modify Tailwind Configuration:

        Follow instructions on the Tailwind CSS website to configure the tailwind.config.js file, specifying where the CSS should be applied.
    
    2 .  Modify Index CSS:

     Follow Tailwind CSS website instructions to update the index.css file with necessary content.

Clean Up and Component Setup:
1.  Cleanup Blank Project:
    Delete unnecessary files: vite.svg.svg, react.svg, App.css.

2.  Update App.jsx:
    -   Clear content in App.jsx and use the shortcut "rfc" to create a basic React component.

Optional Tooling Setup (for Improved Development):
1.  Enhance Development Workflow:
    -   Explore additional tools like:
    -   Console Ninja: Helps check logs within the code.
    -   Auto Rename Tag: Automatically updates corresponding tags when one is changed.
    -   ES7: Supports shortcuts like rfc for creating components.
    -   Prettier: Ensures code formatting correctness.
    -   Tailwind CSS IntelliSense: Provides suggestions and a color picker.

2.  Shortcut for Component Creation:
    -   Use "RAFC" in app.jsx to create a React arrow function component.


Run the Development Server: npm run dev

Verification:
Verify Tailwind CSS Integration:
Check if the specified text appears in the color defined in the HTML element's color class. This confirms that Tailwind CSS is working properly.


--------------------

Playtime : 17:20 

----------------

