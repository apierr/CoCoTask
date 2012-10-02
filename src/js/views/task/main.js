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
            this.listType = this.options.taskType;
            _.bindAll(this, 'updateViewOnCreateTask', 'updateTaskLength', 'onSortList');
            app.vent.on('itemsNumberChanged', this.updateTaskLength);
            app.vent.on('sortList', this.onSortList);
            this.collection = app.taskCollection;
        },

        serializeData: function () {
            return {
                type: this.listType,
                createTask: this.options.createTask,
                taskLength: this.getTaskLength()
            };
        },

        appendHtml: function (collectionView, itemView) {
            if (itemView.model.get('type') === this.listType) {
                collectionView.$el.find('.task-list').append(itemView.el);
            }
        },

        createTask: function (event) {
            var form = event.currentTarget;

            event.preventDefault();
            if (form.checkValidity && form.checkValidity()) {
                this.collection.create({
                    name: this.$(form).find('input').val(),
                    type: this.listType
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
                newType: this.listType,
                newPosition: ui.item.index()
            });
        },

        onSortList: function (model) {
            if (model.get('type') === this.listType) {
                // TODO here it needs to be implement the algo for re-sorting the list
                console.log(model, this);
            }
        },

        getTaskLength: function () {
            var filteredTaskCollection = app.taskCollection.where({
                type: this.listType
            });
            return filteredTaskCollection.length;
        },

        updateTaskLength: function () {
            this.$el.find('.task-length').text(this.getTaskLength());
        }

    });
});
