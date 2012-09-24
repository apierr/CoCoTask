/*global define*/
define([
    'backbone',
    'tpl!../../templates/header.hbs'
], function (Backbone, headerTemplate) {
    "use strict";

    return Backbone.View.extend({

        render: function () {
            this.$el.html(headerTemplate());

            return this;
        }

    });
});
