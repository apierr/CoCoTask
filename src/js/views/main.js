/*global define*/
define([
    'backbone',
    'tpl!../../templates/main.hbs',
    'bootstrapCollapse'
], function (Backbone, mainTemplate) {
    "use strict";

    return Backbone.View.extend({

        className: 'container',

        render: function () {
            this.$el.html(mainTemplate());

            return this;
        }

    });
});
