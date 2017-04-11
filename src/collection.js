'use strict';

var _ = require('underscore');

var list = [];

module.exports = {
    list: list,

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
        return list = _.sortBy(list, function (item) {
            return item.quantity;
        }, this).reverse();
    },

    print: function (matchesNumber) {
        console.log('Report: Underscore.js methods usage statistics:');

        _.each(list, function (item) {
            console.log(' - ' + item.quantity + ' ' + item.value);
        });

        console.log('\nAnalyze ' + matchesNumber + ' files.');
    }
};
