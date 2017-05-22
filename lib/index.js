"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make(sheet) {
    return function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var styles = {};
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            if (key) {
                if (typeof key == 'string') {
                    if (sheet[key]) {
                        Object.assign(styles, sheet[key]);
                    }
                    else {
                        throw new Error('Missing style for ' + key);
                    }
                }
                else if (typeof key == 'object') {
                    Object.assign(styles, key);
                }
                else {
                    throw new Error('Unexpected style type ' + typeof key);
                }
            }
        }
        return styles;
    };
}
exports.default = make;
