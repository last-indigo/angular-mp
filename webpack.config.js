var path = require('path');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        index: './js/index.js',
        entry1: './js/entry-1.js',
        entry2: './js/entry-2.js'
    },
    output: {
        path: './build/',
        filename: '[name]-[chunkhash].js'
    }
};
