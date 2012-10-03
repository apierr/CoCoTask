/*global require*/
(function () {
    'use strict';

    var componentsDir = '../../components/';

    require.config({
        paths: {
            underscore: componentsDir + 'underscore/underscore-min',
            jquery: componentsDir + 'jquery/jquery',
            jqueryUi: componentsDir + 'jquery-ui/jquery-ui.min',
            backbone: componentsDir + 'backbone/backbone-min',
            backboneLocalStorage: componentsDir + 'Backbone.localStorage/backbone.localStorage-min',
            marionette: componentsDir + 'backbone.marionette/lib/amd/backbone.marionette.min',
            handlebars: componentsDir + 'handlebars.js/handlebars-1.0.0-rc.1',
            bootstrapCollapse: componentsDir + 'bootstrap/js/bootstrap-collapse',
            bootstrapAlert: componentsDir + 'bootstrap/js/bootstrap-alert',
            bootstrapPopover: componentsDir + 'bootstrap/js/bootstrap-popover',
            bootstrapTooltip: componentsDir + 'bootstrap/js/bootstrap-tooltip',
            bootstrapEditable: '../../vendor/js/bootstrap-editable.min',
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
            bootstrapAlert: {
                deps: ['jquery']
            },
            bootstrapTooltip: {
                deps: ['jquery']
            },
            bootstrapPopover: {
                deps: ['bootstrapTooltip']
            },
            bootstrapEditable: {
                deps: ['jquery', 'bootstrapPopover']
            },
            backboneLocalStorage: {
                deps: ['backbone']
            },
            jqueryUi: {
                deps: ['jquery']
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

