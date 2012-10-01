/*global define*/
define([
    'backbone'
], function (Backbone) {
    'use strict';

    return [
        {
            name: 'Buying a present for my daughter\'s birthday',
            type: 'todo',
            index: 0
        },
        {
            name: 'Buy bread and milk',
            type: 'todo',
            index: 1
        },
        {
            name: 'Study css',
            type: 'done',
            index: 0
        },
        {
            name: 'Play with friends at football',
            type: 'done',
            index: 1
        },
        {
            name: 'I am working on my laptop, and next to me my iPod is charging',
            type: 'doing',
            index: 0
        }
    ];

});
