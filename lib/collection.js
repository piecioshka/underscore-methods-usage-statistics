'use strict';

var _ = require('underscore');

var list = [];

module.exports = {
    increase: function (property) {
        var findValue = _.findWhere(list, { value: property });
        var findIndex = _.findIndex(list, { value: property });

        if (!findValue) {
            list.push({
                value: property,
                quantity: 1
            });
        } else {
            list[findIndex].quantity++;
        }
    },

    cut: function (count) {
        if (!count) {
            return;
        }

        if (list.length < count) {
            return;
        }

        list.length = count;
    },

    sort: function () {
        list = _.sortBy(list, function (item) {
            return item.quantity;
        }, this).reverse()
    },

    print: function () {
        console.log('Methods statistics:');

        _.each(list, function (item) {
            console.log(' - ' + item.quantity + ' ' + item.value);
        });
    }
};
