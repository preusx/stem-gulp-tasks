'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DEBUG = exports.DEBUG = global.DEBUG = false;
var WATCHING = exports.WATCHING = global.WATCHING = false;

var DIR = exports.DIR = global.DIR = __dirname;

var R = exports.R = global.R = {
    dev: './dev/',
    dest: './dest/'
};

var P = exports.P = global.P = {
    dev: {
        root: R.dev + 'root/',
        php: R.dev + 'php/',
        py: R.dev + 'py/',
        js: R.dev + 'js/',

        html: R.dev + 'html/',
        stylus: R.dev + 'stylus/',
        pug: R.dev + 'pug/',
        css: R.dev + 'css/',

        public: R.dev + 'public/'
    },

    dest: {
        root: '' + R.dest,
        php: R.dest + 'php/',
        py: R.dest + 'py/',
        js: R.dest + 'js/',

        html: R.dest + 'html/',
        stylus: R.dest + 'stylus/',
        pug: R.dest + 'pug/',
        css: R.dest + 'css/',

        public: '' + R.dest
    }
};