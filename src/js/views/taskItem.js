/*global define*/
define([
    'marionette',
    'tpl!../../templates/taskItem.hbs'
], function (Marionette, taskItemTemplate) {
    "use strict";

    return Marionette.ItemView.extend({

        template: taskItemTemplate

    });
});
