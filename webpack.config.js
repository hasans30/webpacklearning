const path = require('path');

module.exports = async (env,options) => {
  const config = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  }

  return config
 
};