_.keys(this, function (key) {
    console.log(key)
});

var tt = _.map(this, function (key) {
    console.log(key)
});

_.each(tt, function (key) {
    console.log(key)
});

var test_ = {};
test_.a = 1;

var o=_.property.call(test_, function (item) {
    console.log(item);
});

console.log(_.map(this));
