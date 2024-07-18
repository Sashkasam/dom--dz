const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    plugins: [
        new HtmlWebPackPlugin(
            {
                template: path.resolve(__dirname, './src/index.html')
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: 'main.css',
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{loader: 'file-loader'}],
                
            }
      
        ]
    }
};