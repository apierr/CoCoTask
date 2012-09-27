/*global define, localStorage*/
define([
    'underscore',
    'backbone',
    '../models/task',
    '../utils/fixture',
    'backboneLocalStorage'
], function (_, Backbone, TaskModel, fixture) {
    'use strict';

    return Backbone.Collection.extend({

        model: TaskModel,

        storageName: 'CoCoTask',

        initialize: function () {
            // TODO probably this code should be improved
            _.bindAll(this, 'loadFixture');
            this.localStorage = new Backbone.LocalStorage(this.storageName);
            if (!localStorage[this.storageName]) {
                _.each(fixture, this.loadFixture);
            }

        },

        // TODO this method should be moved in utils/fixtures
        loadFixture: function (taskObject) {
            this.create(taskObject);
        },

        // TODO this function is unused
        todo: function () {
            return this.filter(function (todo) {
                return todo.get('type') === 'todo';
            });
        }
    });
});
