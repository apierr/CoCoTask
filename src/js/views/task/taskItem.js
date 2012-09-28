/*global define*/
define([
    'marionette',
    'tpl!../../../templates/task/taskItem.hbs'
], function (Marionette, taskItemTemplate) {
    "use strict";

    return Marionette.ItemView.extend({

        template: taskItemTemplate,

        tagName: 'li',

        events: {
            'click .destroy': 'destroyTask',
            'drop': 'onDrop'
        },

        initialize: function (options) {
            this.taskType = options.taskType;
        },

        destroyTask: function () {
            this.model.destroy();
        },

        onDrop: function (e, newTaskState) {
            this.model.save({
                type: newTaskState
            });
        }

    });
});
