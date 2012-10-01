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
            _.bindAll(this, 'createModel');
            this.localStorage = new Backbone.LocalStorage(this.storageName);
            if (!localStorage[this.storageName]) {
                this.loadFixture();
            }
        },

        comparator: function(task) {
            return task.get('index');
        },

        loadFixture: function () {
            _.each(fixture, this.createModel);
        },

        createModel: function (object) {
            this.create(object);
        }

    });
});
