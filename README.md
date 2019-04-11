# NodeJs

* open-source server side runtime environment built on Chrome's V8 JavaScript
* event driven, non-blocking (asynchronous) I/O and cross-platform
* runs in a single process and the application code runs in a single thread
* not fit CPU-intensive operations because takes time and blocks single thread.
* Node.js comes with virtual environment shell, REPL (Read-Eval-Print-Loop).
* JavaScript in Node.js supports loose typing like the browser's JavaScript.
* Node.js script runs in a process, includes process object to get information
* In Node.js, everything declared becomes local by default.
* To export an object in Node.js, use exports.name = object.
* Node.js has three modules-Core Modules,Local Modules,Third Party Modules
* Update NPM to latest version as nam install npm -g
* Debugger for command line, node-inspector for GUI debugging
* .on is exactly same as addListener() in EventEmitter Object
* Express is a fast, unopinionated minimalist web framework for Node.js
* Express.js -> connect -> http -> Node.JS
	* Allows to define routes of application based on HTTP Urls and methods
	* Includes middleware modules to perform tasks on request, response
	* Easy to integrate with different template engines like Jade, Vash, EJS etc.
	* Allows you to define an error handling middleware.
	* Easy to serve static files and resources of your application.
	* Allows you to create REST API server.
	* Easy to connect with databases such as MongoDB, Redis, MySQL
* Using express.static() method, you can server static resources directly
* Advantages of Template Engine in NodeJS
	* Faster performance.
	* Maximizes client side processing.
	* Single template for multiple pages.
	* Templates can be accessed from CDN (Content Delivery Network).
