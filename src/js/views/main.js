/*global define*/
define([
    'backbone',
    'marionette',
    'tpl!../../templates/main.hbs',
    './task',
    'bootstrapCollapse'
], function (Backbone, Marionette, mainTemplate, TaskView) {
    "use strict";

    return Marionette.Layout.extend({

        className: 'container',

        template: mainTemplate,

        initialize: function () {
            // TODO take the following model from localstorage
            var taskModel = new Backbone.Model();
            this.on('render', function () {
                this.todo.show(new TaskView({model: taskModel.set('type', 'Todo')}));
                this.doing.show(new TaskView({model: taskModel.set('type', 'Doing')}));
                this.done.show(new TaskView({model: taskModel.set('type', 'Done')}));
            });
        },

        regions: {
            todo: '#task-todo',
            doing: '#task-doing',
            done: '#task-done'
        }


    });
});
