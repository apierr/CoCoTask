/*global define*/
define([
    'underscore',
    'marionette',
    'tpl!../../../templates/task/taskItem.hbs',
    'bootstrapEditable'
], function (_, Marionette, taskItemTemplate) {
    "use strict";

    return Marionette.ItemView.extend({

        template: taskItemTemplate,

        tagName: 'li',

        events: {
            'click .destroy': 'destroyTask',
            'drop': 'onDrop'
        },

        initialize: function (options) {
            _.bindAll(this, ['edit']);
            this.taskType = options.taskType;
        },

        onRender: function () {
            this.$el.find('label').editable({
                type: 'textarea',
                name: 'task-name',
                validate: this.edit
            });
        },

        destroyTask: function () {
            this.model.destroy();
        },

        onDrop: function (e, newTaskState) {
            this.model.save({
                type: newTaskState
            });
        },

        edit: function (value) {
            this.model.save({
                name: value
            });
        }

    });
});
