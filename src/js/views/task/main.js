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

        className: 'm-task portlet',

        itemView: taskItemView,

        template: taskTemplate,

        events: {
            'submit form': 'createTask',
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
                type: this.options.taskType,
                createTask: this.options.createTask
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
            }
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
