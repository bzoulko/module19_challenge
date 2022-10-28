# Module 19 Challenge Project - Progressive Web Application (PWA) Challenge: Text Editor
This program is a text editor that runs in the browser. This single page application uses PWA and a number of data persistence techniques that make it robust and resiliant to functioning offline. By storing data in an indexedDB database along with a lightweight wrapper around the IndexedDB API.


## Running the Text Editor
* From the Terminal prompt, in this projects main folder you can perform a series of script functions that will compact, build and startup the PWA. Here are a list of scripts that are available to run via the terminal:
    * start:dev     : Concurrently changes to the client folder, runs the build then changes to the server folder to start the server.
    * start         : Runs the build and changes to the server folder to start the server.
    * server        : Changes to the server folder and starts the server.
    * build         : Changes to the client folder and runs the build.
    * install       : Changes to the client folder and installs node modules.
    * client        : Changes to the client folder and runs the build, then starts the server.

* The text editor uses local storage to maintain the information keyed into it. By using IndexedDB the application is able to store and retrieve data even if the browser goes offline. Meaning the application witll still function without having the internet available.

* You also have the option to click on a button in the upper lefthand corner of the application that will install the PWA on your local system so you can run it independantly. Making it look and feel as if it were a seperate application on your pc.


### Special Notes:
* The server.js file is the main driver for starting the application server. Then I've created a structured layout for the javascript project itself. You will see the following folders: 
    
    - client
    
      * dist - Deployment for PWA package.
      
      * src - Folder for client data files.
      
         * css - Style Sheets
         
         * images - Image Icons
         
         * js  - Javascript Constrol Files.
         
    - server
      
      * routes - API Controller for server connection.

* Packages installed for this application were:
    - @babel/core
    - @babel/plugin-transform-runtime
    - @babel/preset-env
    - @babel/runtime
    - babel-loader
    - css-loader
    - html-webpack-plugin
    - http-server
    - mini-css-extract-plugin
    - style-loader
    - webpack
    - webpack-cli
    - webpack-dev-server
    - webpack-pwa-manifest
    - workbox-webpack-plugin
    - code-mirror-themes
    - idb

* Link to Heroku.


### Screen Shots.

