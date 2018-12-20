const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "./main.js"
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.scss$/,
        // loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
        loader: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it use publicPath in webpackOptions.output
            path: path.resolve(__dirname, "./dist")
           
          }
        }, 'css-loader', 'sass-loader', 'postcss-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              path: path.resolve(__dirname, "./dist")
             
            }
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
  ]
};