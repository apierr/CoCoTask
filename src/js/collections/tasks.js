define([
    'underscore',
    'backbone',
    '../models/task',
    'backboneLocalStorage'
], function (_, Backbone, TaskModel) {

    return Backbone.Collection.extend({

        model: TaskModel,

        localStorage: new Backbone.LocalStorage('todos-marionette')

    });
});


