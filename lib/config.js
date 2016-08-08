export var DEBUG = global.DEBUG = false;
export var WATCHING = global.WATCHING = false;

export var DIR = global.DIR = __dirname;

export var R = global.R = {
  dev: './dev/',
  dest: './dest/',
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

  dest: {
    root:   `${R.dest}`,
    php:    `${R.dest}php/`,
    py:     `${R.dest}py/`,
    js:     `${R.dest}js/`,

    html:   `${R.dest}html/`,
    stylus: `${R.dest}stylus/`,
    pug:    `${R.dest}pug/`,
    css:    `${R.dest}css/`,

    public: `${R.dest}`,
    },
};
