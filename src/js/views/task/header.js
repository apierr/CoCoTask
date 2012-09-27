/*global define*/
define([
    'marionette',
    'tpl!../../../templates/task/header.hbs',
    '../../app',
    './taskItem'
], function (Marionette, taskTemplate, app, taskItemView) {
    "use strict";

    return Marionette.CompositeView.extend({

        initialize: function () {
            this.collection = app.taskCollection;
        },

        itemView: taskItemView,

        template: taskTemplate

    });
});
