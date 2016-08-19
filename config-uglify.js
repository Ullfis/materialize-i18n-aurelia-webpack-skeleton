"use strict";
var core_1 = require('@easy-webpack/core');
var webpack = require('webpack');
module.exports = function uglify(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.debug, debug = _c === void 0 ? false : _c, _d = _b.exclude, exclude = _d === void 0 ? [] : _d;
    return function uglify() {
        var options = debug ? {
            beautify: true,
            mangle: false,
            dead_code: false,
            unused: false,
            deadCode: false,
            compress: {
                screw_ie8: true,
                keep_fnames: true,
                drop_debugger: false,
                dead_code: false,
                unused: false
            },
            comments: true,
        } : {
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: false
            },
            exclude: exclude,
            compress: {
                screw_ie8: true,
                warnings: false,
                keep_fnames: false
            },
            comments: false
        };
        return {
            plugins: core_1.get(this, 'plugins', []).concat([
                new webpack.optimize.UglifyJsPlugin(options),
            ])
        };
    };
};
