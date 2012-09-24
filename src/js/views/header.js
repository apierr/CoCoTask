/*global define*/
define([
    'backbone',
    'tpl!../../templates/header.hbs',
    '../app'
], function (Backbone, headerTemplate, app) {
    "use strict";

    return Backbone.View.extend({

        render: function () {
            this.$el.html(headerTemplate());

            return this;
        }

    });
});
