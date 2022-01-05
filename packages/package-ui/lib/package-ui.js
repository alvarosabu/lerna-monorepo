'use strict';

const packageUtils = require('@alvarosabu/package-utils')

module.exports = packageUi;

function packageUi() {
    // TODO
    const { slugify } = packageUtils();
    const button = `<button>${slugify('Awiwi soy un boton')}</button>`

    const label = `<label>${slugify('Awiwi soy una label')}</label>`

    return {
        button,
        label,
    }
}
