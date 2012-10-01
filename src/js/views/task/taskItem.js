/*global define*/
define([
    'underscore',
    'marionette',
    'tpl!../../../templates/task/taskItem.hbs',
    '../../app',
    'bootstrapEditable'
], function (_, Marionette, taskItemTemplate, app) {
    "use strict";

    return Marionette.ItemView.extend({

        template: taskItemTemplate,

        tagName: 'li',

        events: {
            'click .destroy': 'destroyTask',
            'drop': 'onDrop'
        },

        initialize: function () {
            _.bindAll(this, ['editTaskName']);
        },

        onRender: function () {
            this.$el.find('label').editable({
                type: 'textarea',
                name: 'task-name',
                validate: this.editTaskName,
                template: '<textarea rows="3"></textarea>'
            });
        },

        destroyTask: function () {
            this.model.destroy();
            app.vent.trigger('itemsNumberChanged');
        },

        onDrop: function (event, newTaskState) {
            this.model.save({
                type: newTaskState
            });
            app.vent.trigger('itemsNumberChanged');
        },

        editTaskName: function (value) {
            this.model.save({
                name: value
            });
        }

    });
});
