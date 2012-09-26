/*global require*/
(function () {
    "use strict";

    var componentsDir = '../../components/';

    require.config({
        paths: {
            underscore: componentsDir + 'underscore/underscore-min',
            jquery: componentsDir + 'jquery/jquery',
            backbone: componentsDir + 'backbone/backbone-min',
            marionette: componentsDir + 'backbone.marionette/lib/amd/backbone.marionette.min',
            handlebars: componentsDir + 'handlebars.js/handlebars-1.0.0-rc.1',
            bootstrapCollapse: componentsDir + 'bootstrap/js/bootstrap-collapse',
            text: componentsDir + 'text/text',
            tpl: 'utils/handlebars_templates'
        },
        shim: {
            underscore: {
                exports: '_'
            },
            backbone: {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            marionette: {
                deps: ['backbone', 'underscore', 'jquery'],
                exports: 'marionette'
            },
            handlebars: {
                exports: 'Handlebars'
            },
            bootstrapCollapse: {
                deps: ['jquery']
            }
        }
    });

    require([
        './app',
        'views/header',
        'views/main'
    ], function (app, HeaderView, MainView) {

        app.addInitializer(function () {
            app.header.show(new HeaderView());
            app.main.show(new MainView());
        });

        app.start();
    });

}());

