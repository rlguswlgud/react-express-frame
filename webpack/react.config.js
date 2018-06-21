const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        "index": './react/src/index.js'
    },
    output: {
        path: path.join(__dirname, '../', 'react/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, '../', 'react/src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['transform-object-rest-spread', 'babel-plugin-transform-class-properties']
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true                       
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                      name: '[hash].[ext]',
                      limit: 30000,
                    }                    
                }]
            }
        ]
    },
    resolve: {
        alias: {
            "~routes": path.join(__dirname, '../', 'react/src/routes'),
            "~components": path.join(__dirname, '../', 'react/src/components'),
            "~modules": path.join(__dirname, '../', 'react/src/modules'),
            "~imgs": path.join(__dirname, '../', 'react/src/imgs')
        }
    },
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: './react/public/dev.html'
        }
    }
};