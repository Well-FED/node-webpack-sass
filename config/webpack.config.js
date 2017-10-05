const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const DIR_SOURCE = path.join(__dirname, '..', 'source');
const DIR_BUILD = path.join(__dirname, '..', 'build');
const DIR_PUBLIC = path.join(__dirname, '..', 'public');

let config = {
    entry: path.join(DIR_SOURCE, 'index.js'),
    output: {
        path: DIR_BUILD,
        filename: 'output.js'
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract(
                {
                  fallback: 'style-loader',
                  use: [
                    { // translates CSS into CommonJS
                      // See: https://webpack.js.org/loaders/css-loader/
                      loader: 'css-loader'
                    }
                  ]
                }
              )
            },
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract(
                {
                  fallback: 'style-loader',
                  use: [
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                  ]
                }
              )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
          template: DIR_SOURCE + '/static/index.html'
        })
    ]
};

module.exports = config;
