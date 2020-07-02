var path = require('path');
var webpack = require('webpack');
var uglifyJsPlugin = require('uglifyjs-webpack-plugin');
var definePlugin = webpack.DefinePlugin;

// webpack for demo website
module.exports = {
  entry: './demo/src/index.js',
  output: {
    path: path.resolve(__dirname, './demo/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules:[{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=512'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    echarts: 'window.echarts',
  },
  plugins: [
    new definePlugin({'process.env': {NODE_ENV: '"production"'}})
  ],
  optimization: {
    minimizer: [
      new uglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
        }
      })
    ],
  },
  devtool: 'source-map',
  mode: 'development',
};
