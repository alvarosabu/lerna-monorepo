'use strict';

module.exports = packageUtils;

function packageUtils() {
    /**
     * Returns slugify version of a string
     * @param  {string} text
     * @returns string
     */
    const slugify = (text) =>
    text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '')

    const isArray = (a) => !!a && a.constructor === Array

    return {
        slugify,
        isArray
    }
}
