/*global define*/
define([
    'marionette',
    'tpl!../../templates/main.hbs',
    './task/main',
    'jqueryUi'
], function (Marionette, mainTemplate, TaskView) {
    "use strict";

    return Marionette.Layout.extend({

        className: 'container',

        template: mainTemplate,

        initialize: function () {
            this.on('render', function () {
                // TODO it works but probably it could be improved
                this.todo.show(new TaskView({
                    taskType: 'todo',
                    createTask: 'What needs to be done?'
                }));
                this.doing.show(new TaskView({
                    taskType: 'doing',
                    createTask: 'What are you doing?'
                }));
                this.done.show(new TaskView({
                    taskType: 'done',
                    createTask: 'What have you done?'
                }));
            });
        },

        onRender: function () {
            this.$el.find('.column').sortable({
                connectWith: '.column'
            });
        },

        regions: {
            todo: '#task-todo',
            doing: '#task-doing',
            done: '#task-done'
        }

    });
});
