/*global define*/
define([
    'marionette',
    'tpl!../../../templates/task/header.hbs',
    '../../app',
    './taskItem',
    'queryUiDraggable'
], function (Marionette, taskTemplate, app, taskItemView) {
    "use strict";

    return Marionette.CompositeView.extend({

        className: 'm-task',

        itemView: taskItemView,

        template: taskTemplate,

        events: {
            'keypress .new-task': 'createOnEnter',
            'sortreceive': 'onSortReceive'
        },

        initialize: function () {
            this.collection = app.taskCollection;
            this.itemViewOptions = {
                taskType: this.options.taskType
            };
        },

        serializeData: function () {
            return {
                type: this.options.taskType
            };
        },

        appendHtml: function (collectionView, itemView) {
            if (itemView.model.get('type') === this.options.taskType) {
                collectionView.$el.find('.task-list').append(itemView.el);
            }
        },

        createOnEnter: function (e) {
            // TODO use the form
            if (e.keyCode !== 13) {
                return;
            }
            this.collection.create({
                name: this.$el.find('input').val(),
                type: this.options.taskType
            });
            // TODO the reset of input value should be done just on success
            this.$el.find('input').val('');
        },

        onRender: function () {
            this.$el.find('ul.task-list').sortable({
                connectWith: '.connectedSortable'
            }).disableSelection();
        },

        onSortReceive: function (e, ui) {
            this.$(ui.item[0]).trigger('drop', this.options.taskType);
        }

    });
});
