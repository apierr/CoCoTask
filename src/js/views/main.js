/*global define*/
define([
    'backbone',
    'marionette',
    'tpl!../../templates/main.hbs',
    './task/main',
    'bootstrapCollapse'
], function (Backbone, Marionette, mainTemplate, TaskView) {
    "use strict";

    return Marionette.Layout.extend({

        className: 'container',

        template: mainTemplate,

        initialize: function () {
            this.on('render', function () {
                // TODO it works but probably it could be improved
                this.todo.show(new TaskView({
                    taskType: 'todo'
                }));
                this.doing.show(new TaskView({
                    taskType: 'doing'
                }));
                this.done.show(new TaskView({
                    taskType: 'done'
                }));
            });
        },

        regions: {
            todo: '#task-todo',
            doing: '#task-doing',
            done: '#task-done'
        }

    });
});
