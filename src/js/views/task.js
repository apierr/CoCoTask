/*global define*/
define([
    'marionette',
    'tpl!../../templates/task.hbs',
    './taskItem'
], function (Marionette, taskTemplate, taskItemView) {
    "use strict";

    return Marionette.CompositeView.extend({

        emptyView: taskItemView,

        template: taskTemplate

    });
});
