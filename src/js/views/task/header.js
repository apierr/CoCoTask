/*global define*/
define([
    'marionette',
    'tpl!../../../templates/task/header.hbs',
    '../../app',
    './taskItem'
], function (Marionette, taskTemplate, app, taskItemView) {
    "use strict";

    return Marionette.CompositeView.extend({

        className: 'm-task',

        initialize: function () {
            this.collection = app.taskCollection;
        },

        appendHtml: function (collectionView, itemView) {
            collectionView.$el.find('.task-list').append(itemView.el);
        },

        itemView: taskItemView,

        template: taskTemplate

    });
});
