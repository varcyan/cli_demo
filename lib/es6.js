"use strict";

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = 1;
var b = 2;
var fn = function fn(x) {
    return x * x;
};
function addAll() {
    return (0, _from2.default)(arguments).reduce(function (a, b) {
        return a + b;
    });
}
console.log(addAll(2, 4, 5));
console.log(fn(2));