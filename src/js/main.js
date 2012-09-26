/*global require*/
(function () {
    'use strict';

    var componentsDir = '../../components/';

    require.config({
        paths: {
            underscore: componentsDir + 'underscore/underscore-min',
            jquery: componentsDir + 'jquery/jquery',
            backbone: componentsDir + 'backbone/backbone-min',
            backboneLocalStorage: componentsDir + 'Backbone.localStorage/backbone.localStorage-min',
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
                deps: ['backbone'],
                exports: 'marionette'
            },
            handlebars: {
                exports: 'Handlebars'
            },
            bootstrapCollapse: {
                deps: ['jquery']
            },
            backboneLocalStorage: {
                deps: ['backbone']
            }
        }
    });

    require([
        './app',
        'views/header',
        'views/main',
        'collections/tasks'
    ], function (app, HeaderView, MainView, TaskCollection) {

        app.addInitializer(function () {
            app.taskCollection = new TaskCollection();
            app.taskCollection.fetch({
                success: function () {
                    app.header.show(new HeaderView());
                    app.main.show(new MainView());
                }
            });
        });

        app.start();
    });

}());

