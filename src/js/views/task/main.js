/*global define*/
define([
    'underscore',
    'marionette',
    'tpl!../../../templates/task/header.hbs',
    '../../app',
    './taskItem',
    'jqueryUi'
], function (_, Marionette, taskTemplate, app, taskItemView) {
    "use strict";

    return Marionette.CompositeView.extend({

        className: 'm-task portlet',

        itemView: taskItemView,

        template: taskTemplate,

        events: {
            'submit form': 'createTask',
            'sortreceive': 'onSortReceive'
        },

        initialize: function () {
            _.bindAll(this, 'updateViewOnCreateTask', 'updateTaskLength');
            app.vent.on('itemsNumberChanged', this.updateTaskLength);
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
                }, {
                    success: this.updateViewOnCreateTask
                });
            }
        },

        updateViewOnCreateTask: function () {
            this.$el.find('input').val('');
            app.vent.trigger('itemsNumberChanged');
        },

        onRender: function () {
            this.$el.find('ul.task-list').sortable({
                connectWith: '.connectedSortable'
            }).disableSelection();
        },

        onSortReceive: function (e, ui) {
            this.$(ui.item[0]).trigger('drop', {
                newType: this.options.taskType,
                newPosition: ui.item.index()
            });

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
