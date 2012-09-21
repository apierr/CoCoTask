/*global require*/
(function () {
    "use strict";
    var vendorDir = '../../components/';
    require.config({
        paths: {
            underscore: vendorDir + 'underscore/underscore-min',
            jquery: vendorDir + 'jquery/jquery',
            backbone: vendorDir + 'backbone/backbone-min',
            marionette: vendorDir + 'backbone.marionette/lib/amd/backbone.marionette.min'
        },
        shim: {
            underscore: {
                exports: '_'
            },
            backbone: {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            }
        }
    });
    require([
        './app'
    ], function (app) {
        console.log(app);
    });
}());

