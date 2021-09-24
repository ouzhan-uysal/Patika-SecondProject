const path = require('path');

module.exports = {
  /*
    mode: "development" --> dist içerisinde .js dosyanın geliştiriciler için daha okunur bir halini sunar.

    mode: "production"  --> .js dosyasının sıkıştırılmış halini bize sunar bu şekilde aynı işlevini yerine getirirken boyutu küçülmüş olur.
    */
  // mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'main.js',
    publicPath: '/assets/'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    devMiddleware: {
      publicPath: "https://localhost:3000/dist/",
    },
    // hot: "only",
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
};
