const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename:'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules:[
      {
        test:/\.css$/i,
        use:['style-loader', 'css-loader'],
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ] ,
  devServer: {
   static:{
    directory: path.join(__dirname, 'dist'),
   }, 
  }
};