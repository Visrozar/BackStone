const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: true,
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin([
            { from: 'src/images', to: 'images' }
        ])
    ]
}