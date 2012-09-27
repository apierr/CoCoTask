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

        events: {
            'keypress .new-task': 'createOnEnter'
        },

        initialize: function () {
            this.collection = app.taskCollection;
        },

        appendHtml: function (collectionView, itemView) {
            if (itemView.model.get('type') === this.options.taskType)  {
                collectionView.$el.find('.task-list').append(itemView.el);
            }
        },

        createOnEnter: function (e) {
            // TODO use the form
            if (e.keyCode != 13) {
                return;
            }
            this.collection.create({
                name: this.$el.find('input').val(),
                type: this.options.taskType
            });
        },

        itemView: taskItemView,

        template: taskTemplate

    });
});
