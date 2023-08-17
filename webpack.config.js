const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = async (env,options) => {
  const config = {
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
 
  }

  return config
 
};