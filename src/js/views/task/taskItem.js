/*global define*/
define([
    'jquery',
    'underscore',
    'marionette',
    'tpl!../../../templates/task/taskItem.hbs',
    '../../app',
    'bootstrapEditable'
], function ($, _, Marionette, taskItemTemplate, app) {
    "use strict";

    return Marionette.ItemView.extend({

        template: taskItemTemplate,

        tagName: 'li',

        events: {
            'click .destroy': 'destroyTask',
            'drop': 'onDrop'
        },

        initialize: function () {
            _.bindAll(this, 'editTaskName');
        },

        onRender: function () {
            // sortInAction variable is used to avoid of displaying the popup when moving the item.
            var sortInAction = false;

            this.$el.find('label').mouseup(function (event) {
                sortInAction = 'absolute' === $(event.target).closest('li').css('position');
            }).click(function (event) {
                if (sortInAction) {
                    event.stopImmediatePropagation();
                }
            }).editable({
                type: 'textarea',
                name: 'task-name',
                validate: this.editTaskName,
                template: '<textarea rows="3"></textarea>'
            });
        },

        destroyTask: function () {
            this.model.destroy({
                success: function () {
                    app.vent.trigger('itemsNumberChanged');
                }
            });
            app.vent.trigger('itemsNumberChanged');
        },

        // TODO this should be avoided putting the listId in the header list
        onDrop: function (event, listId) {
            var isListChanged = this.model.get('type') !== listId;

            this.model.save({
                type: listId
            }, {
                success: function () {
                    if (isListChanged) {
                        app.vent.trigger('itemsNumberChanged');
                    }
                    app.vent.trigger('sortLists');
                }
            });
        },

        editTaskName: function (value) {
            this.model.save({
                name: value
            });
        }

    });
});
