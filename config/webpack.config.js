const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { // translates CSS into CommonJS
                          // See: https://webpack.js.org/loaders/css-loader/
                          loader: 'css-loader'
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
            // {
            //     test: /\.css$/,
            //     include: DIR_PUBLIC,
            //     use: {
            //         loader: 'file-loader',
            //         options: {
            //             name: '[path][name].[ext]',
            //             outputPath: DIR_BUILD
            //         }
            //     }
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css'
        })
    ]
};

module.exports = config;