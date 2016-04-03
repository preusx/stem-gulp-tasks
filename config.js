module.exports.DEBUG = global.DEBUG = false;
module.exports.WATCHING = global.WATCHING = false;

module.exports.P = global.P = {
  dev: {
    root:   './dev/' +    'root/',
    php:    './dev/' +    'php/',
    py:     './dev/' +    'py/',
    js:     './dev/' +    'js/',

    html:   './dev/' +    'html/',
    stylus: './dev/' +    'stylus/',
    jade:   './dev/' +    'jade/',
    css:    './dev/' +    'css/',

    img:    './dev/' +    'img/',
    font:   './dev/' +    'font/',
    vendor: './dev/' +    'vendor/',
    },
  dist: {
    root:   './dist/',
    php:    './dist/' +   'php/',
    py:     './dist/' +   'py/',
    js:     './dist/' +   'js/',

    html:   './dist/' +   'html/',
    stylus: './dist/' +   'stylus/',
    jade:   './dist/' +   'jade/',
    css:    './dist/' +   'css/',

    img:    './dist/' +   'img/',
    font:   './dist/' +   'font/',
    vendor: './dist/' +   'vendor/',
    },
};

module.exports.DIR = global.DIR = __dirname;