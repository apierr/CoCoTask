/*global define, setTimeout*/
define([
    'underscore',
    'marionette',
    'tpl!../../../templates/task/header.hbs',
    '../../app',
    './taskItem',
    'queryUiDraggable'
], function (_, Marionette, taskTemplate, app, taskItemView) {
    "use strict";

    return Marionette.CompositeView.extend({

        className: 'm-task',

        itemView: taskItemView,

        template: taskTemplate,

        events: {
            'submit form': 'createTask',
            'sortreceive': 'onSortReceive',
            'sortremove': 'onSortRemove'
        },

        initialize: function () {
            _.bindAll(this, ['updateTaskLength']);
            app.vent.on('taskDeleted', this.updateTaskLength);
            this.collection = app.taskCollection;
        },

        serializeData: function () {
            return {
                type: this.options.taskType,
                createTask: this.options.createTask,
                taskLength: this.getTaskLength()
            };
        },

        appendHtml: function (collectionView, itemView) {
            if (itemView.model.get('type') === this.options.taskType) {
                collectionView.$el.find('.task-list').append(itemView.el);
            }
        },

        createTask: function (event) {
            var form = event.currentTarget;

            event.preventDefault();
            if (form.checkValidity && form.checkValidity()) {
                this.collection.create({
                    name: this.$(form).find('input').val(),
                    type: this.options.taskType
                });
                // TODO the reset of input value should be done just on success
                this.$el.find('input').val('');
                // TODO updateTaskLength should be done just on success, also because the collection could be not updated
                setTimeout(this.updateTaskLength, 0);
            }
        },

        onRender: function () {
            this.$el.find('ul.task-list').sortable({
                connectWith: '.connectedSortable'
            }).disableSelection();
        },

        onSortReceive: function (e, ui) {
            this.$(ui.item[0]).trigger('drop', this.options.taskType);
            setTimeout(this.updateTaskLength, 0);
        },

        onSortRemove: function () {
            setTimeout(this.updateTaskLength, 0);
        },

        getTaskLength: function () {
            var filteredTaskCollection = app.taskCollection.where({
                type: this.options.taskType
            });
            return filteredTaskCollection.length;
        },

        updateTaskLength: function () {
            this.$el.find('.task-length').text(this.getTaskLength());
        }

    });
});
