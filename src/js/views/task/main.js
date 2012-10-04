/*global define*/
define([
    'jquery',
    'underscore',
    'marionette',
    'tpl!../../../templates/task/header.hbs',
    '../../app',
    './taskItem',
    'jqueryUi'
], function ($, _, Marionette, taskTemplate, app, taskItemView) {
    "use strict";

    return Marionette.CompositeView.extend({

        className: 'm-task portlet',

        itemView: taskItemView,

        template: taskTemplate,

        events: {
            'submit form': 'createTask',
            'sortupdate': 'onSortReceive'
        },

        initialize: function () {
            // TODO taskType should be changed in listId in the backend too
            this.listId = this.options.taskType;
            _.bindAll(this, 'updateViewOnCreateTask', 'updateTaskLength', 'sortLists');
            app.vent.on('itemsNumberChanged', this.updateTaskLength);
            app.vent.on('sortLists', this.sortLists);
            this.collection = app.taskCollection;
        },

        serializeData: function () {
            return {
                type: this.listId,
                createTask: this.options.createTask,
                taskLength: this.getTaskLength()
            };
        },

        appendHtml: function (collectionView, itemView) {
            if (itemView.model.get('type') === this.listId) {
                collectionView.$el.find('.task-list').append(itemView.el);
            }
        },

        createTask: function (event) {
            var form = event.currentTarget;

            event.preventDefault();
            if (form.checkValidity && form.checkValidity()) {
                this.collection.create({
                    name: this.$(form).find('input').val(),
                    type: this.listId,
                    // TODO this variable should be changed in index
                    next: this.getTaskLength(),
                    // TODO maybe the id should be generated server-side
                    id: this.collection.length
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

        // TODO if I put the reference list in the header of the list I can avoid this complicated staff
        onSortReceive: function (e, ui) {
            this.$(ui.item[0]).trigger('drop', this.listId);
        },

        sortLists: function () {
            var listId = this.listId;
            this.updateTaskLength();
            this.$el.find('ul.ui-sortable').each(function () {
                $(this).find('li').each(function (i) {
                    var taskId = parseInt($(this).find('.task-id').text(), 10);
                    app.taskCollection.where({id: taskId})[0].save({
                        next: i,
                        type: listId
                    });
                });
            });
        },

        getTaskLength: function () {
            var filteredTaskCollection = app.taskCollection.where({
                type: this.listId
            });
            return filteredTaskCollection.length;
        },

        updateTaskLength: function () {
            this.$el.find('.task-length').text(this.getTaskLength());
        }

    });
});
