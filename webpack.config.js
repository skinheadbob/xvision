var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var dir_js = path.resolve(__dirname, 'js');
var dir_css = path.resolve(__dirname, 'css');
var dir_build = path.resolve(__dirname, 'build');

var xvision_lib_config = {
    entry: path.resolve(dir_js, 'xvision.js'),
    output: {
        path: dir_build,
        filename: 'xvision.js',
        library: 'xvision'
    },
    devServer: {
        contentbase: dir_build,
    },
    module: {
        loaders: [{
                loader: 'babel-loader',
                test: dir_js,
            },
            {
                test: dir_css,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    node: {
        fs: 'empty',
        child_process: 'empty'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
};

module.exports = [
    xvision_lib_config
];