/*global define*/
define([
    'backbone',
    'tpl!../../templates/header.hbs',
    '../app'
], function (Backbone, headerTemplate, app) {
    "use strict";

    return Backbone.View.extend({

        className: 'navbar navbar-inverse navbar-fixed-top',

        events: {
            'click [data-tid="load-fixture"]': 'loadFixture'
        },

        render: function () {
            this.$el.html(headerTemplate());

            return this;
        },

        loadFixture: function () {
            app.taskCollection.loadFixture();
        }

    });
});
