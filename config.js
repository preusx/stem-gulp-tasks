export var DEBUG = global.DEBUG = false;
export var WATCHING = global.WATCHING = false;

export var DIR = global.DIR = __dirname;

export var R = global.R = {
  dev: './dev/',
  dist: './dist/',
};

export var P = global.P = {
  dev: {
    root:   `${R.dev}root/`,
    php:    `${R.dev}php/`,
    py:     `${R.dev}py/`,
    js:     `${R.dev}js/`,

    html:   `${R.dev}html/`,
    stylus: `${R.dev}stylus/`,
    pug:    `${R.dev}pug/`,
    css:    `${R.dev}css/`,

    public: `${R.dev}public/`,
    },

  dist: {
    root:   `${R.dist}`,
    php:    `${R.dist}php/`,
    py:     `${R.dist}py/`,
    js:     `${R.dist}js/`,

    html:   `${R.dist}html/`,
    stylus: `${R.dist}stylus/`,
    pug:    `${R.dist}pug/`,
    css:    `${R.dist}css/`,

    public: `${R.dist}`,
    },
};
