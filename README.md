CoCo Task
=================

CoCo Task is a simple and nice to use user interface to manage tasks.
It promotes COoperation and COmpetition amongst its members to achieve tasks and meet deadlines in order to reach the company's overall objectives.

* It uses [Bower](https://github.com/twitter/bower) as package manager for easily install assets such as images, CSS and JavaScript, and manages dependencies for you.
* It uses [LESS CSS Preprocessor](https://github.com/cloudhead/less.js) for Smarter Style Sheets.
* It uses [media query](http://www.w3.org/TR/css3-mediaqueries/) to adjust styling based on device and its orientation layout.
* It uses [Twitter Bootstrap](http://twitter.github.com/bootstrap/)  to create interfaces quickly without needing to style primary elements.
* It uses [RequireJS](http://requirejs.org/) which promotes the Javascript AMD format, allowing for highly portable modules that could be loaded easily and asynchronously.
* It uses [Backbone JS](http://backbonejs.org/) to create a good design patterns such as the Observer/Subscriber pattern, dependency injection etc.

To get started -- checkout [CoCoTask](http://computerone.altervista.org/CoCoTask/index.html)

Installation
-----

Install the dependencies with [Bower](https://github.com/twitter/bower) (assuming
you have Bower available globally):

    bower install
    chmod 755 components/*

When you run bower install, Bower will read the `component.json` file, resolve all the relevant dependencies and install them.

