/*global define*/
define([
    'marionette',
    'marionetteHandlebars'
], function (Marionette, MarionetteHandlebars) {
    "use strict";
    // this module defines the main application, which will be used by other
    // modules to dispatch or listen to events. It should not define its own
    // logic to avoid circular dependencies.

    var app = new Marionette.Application();

    app.addRegions({
        header: '#header',
        sidebar: '#sidebar',
        main: '#main',
        modal: '#modal'
    });

    console.log(MarionetteHandlebars);

    return app;
});

