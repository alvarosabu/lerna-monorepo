'use strict';

const packageUtils = require('@alvarosabu/package-utils')

module.exports = packageUi;

function packageUi() {
    // TODO
    const { slugify } = packageUtils();
    const button = `<button>${slugify('Awiwi soy un boton')}</button>`

    return {
        button,
    }
}
