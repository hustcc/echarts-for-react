var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var definePlugin = webpack.DefinePlugin;

module.exports = {
  entry: './demo/demo.jsx',
  output: {
    path: './demo/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders:[{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=512'
    }]
  },
  externals: {
    echarts: 'window.echarts',
  },
  plugins: [
    new uglifyJsPlugin({compress: {warnings: false}}),
    new definePlugin({'process.env': {NODE_ENV: '"production"'}})
  ]
};
