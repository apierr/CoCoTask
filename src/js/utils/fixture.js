/*global define*/
define([
    'backbone'
], function (Backbone) {
    'use strict';

    return [
        {
            id: 0,
            name: 'Buying a present for my daughter\'s birthday',
            type: 'todo',
            next: 0
        },
        {
            id: 1,
            name: 'Buy bread and milk',
            type: 'todo',
            next: 1
        },
        {
            id: 5,
            name: 'Buy a lamp',
            type: 'todo',
            next: 2
        },
        {
            id: 2,
            name: 'Study css',
            type: 'done',
            next: 0
        },
        {
            id: 3,
            name: 'Play with friends at football',
            type: 'done',
            next: 1
        },
        {
            id: 4,
            name: 'I am working on my laptop, and next to me my iPod is charging',
            type: 'doing',
            next: 0
        }
    ];

});
