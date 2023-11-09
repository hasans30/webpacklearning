const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = async (env,options) => {
  const config = {
  // mode: 'development',
  entry: {
    taskpane: ["./src/index.js"],
  },
  output: {
    filename: (pathData) => (pathData.chunk.name === "commands" ? `[name].js` : `[name][chunkhash].js`),
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html',
    chunks:["taskpane"]
  }
  )],

    devServer: {
      hot: true,
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/myfiles',
    },
    allowedHosts: [
      'host.com'
    ],
    compress: true,
    port: 9000,
  },
 
  }

  return config
 
};