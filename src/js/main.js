/*global require*/
(function () {
    "use strict";

    var vendorDir = '../../components/';

    require.config({
        paths: {
            underscore: vendorDir + 'underscore/underscore-min',
            jquery: vendorDir + 'jquery/jquery',
            backbone: vendorDir + 'backbone/backbone-min',
            marionette: vendorDir + 'backbone.marionette/lib/amd/backbone.marionette.min',
            handlebars: vendorDir + 'handlebars.js/handlebars-1.0.0-rc.1',
            text: vendorDir + 'text/text',
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
            }
        }
    });

    require([
        './app',
        'views/header'
    ], function (app, HeaderView) {

        app.addInitializer(function () {
            app.header.show(new HeaderView());
        });

        app.start();
    });

}());

