/*global define*/
define([
    'marionette',
    'tpl!../../../templates/task/taskItem.hbs'
], function (Marionette, taskItemTemplate) {
    "use strict";

    return Marionette.ItemView.extend({

        template: taskItemTemplate,

        tagName: 'li'

    });
});
