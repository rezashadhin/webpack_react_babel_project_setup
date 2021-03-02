const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const port = process.env.PORT || 3000;
//const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[hash].js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer:{
        host: 'localhost',
        compress: true,
        port: port,
        hot: true,
        historyApiFallback: true,
        open: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {   test: /\.js/i,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [ 
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options:{
                            modules:{
                                exportLocalsConvention: "camelCase",
                                localIdentName: "[name]__[local]___[hash:base64:5]"
                            },
                            sourceMap: true
                        }
                    },
                    { 
                        loader: 'postcss-loader',
                        options: {
                           postcssOptions: {
                               plugins: [
                                   [ 'autoprefixer', {}, ],
                               ],
                           },
                       }
                     },
                    {loader: 'sass-loader'}
                  ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),   
    ]
}