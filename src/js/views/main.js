/*global define*/
define([
    'backbone',
    'marionette',
    'tpl!../../templates/main.hbs',
    './task/main',
    'bootstrapAlert',
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
            var self = this;
            setTimeout(function () {
                $('.column').sortable({
                    connectWith: '.column'
                });
                $('.portlet').addClass('ui-widget ui-widget-content ui-helper-clearfix ui-corner-all');
                $('.column').disableSelection();
            }, 0);
        },

        regions: {
            todo: '#task-todo',
            doing: '#task-doing',
            done: '#task-done'
        }

    });
});
