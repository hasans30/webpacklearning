const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = async (env,options) => {
  const config = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'taskpane.html',
    template: 'src/index.html',
  }
  )],
 
  }

  return config
 
};