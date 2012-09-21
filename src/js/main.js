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
            marionetteHandlebars: vendorDir + 'Backbone.Marionette.Handlebars/backbone.marionette.handlebars.min'
        },
        shim: {
            underscore: {
                exports: '_'
            },
            backbone: {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            marionetteHandlebars: {
                deps: ['marionette']
            }
        }
    });
    require([
        './app'
    ], function (app) {
//        console.log(app);
    });
}());

