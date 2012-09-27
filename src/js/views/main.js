/*global define*/
define([
    'backbone',
    'marionette',
    'tpl!../../templates/main.hbs',
    './task/header',
    'bootstrapCollapse'
], function (Backbone, Marionette, mainTemplate, TaskView) {
    "use strict";

    return Marionette.Layout.extend({

        className: 'container',

        template: mainTemplate,

        initialize: function () {
            this.on('render', function () {
                // TODO should I avoid to create a model just for one parameter?
                this.todo.show(new TaskView({model: new Backbone.Model({'type': 'todo'})}));
                this.doing.show(new TaskView({model: new Backbone.Model({'type': 'doing'})}));
                this.done.show(new TaskView({model: new Backbone.Model({'type': 'done'})}));
            });
        },

        regions: {
            todo: '#task-todo',
            doing: '#task-doing',
            done: '#task-done'
        }

    });
});
