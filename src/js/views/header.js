/*global define*/
define([
    'backbone',
    'tpl!../../templates/header.hbs',
    'bootstrapCollapse'
], function (Backbone, headerTemplate) {
    "use strict";

    return Backbone.View.extend({

        render: function () {
            this.$el.html(headerTemplate());

            return this;
        }

    });
});
