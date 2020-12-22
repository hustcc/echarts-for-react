const webpack = require('webpack');
const resolve = require('path').resolve;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const BABEL_OPTIONS = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 0.25%, not dead',
      },
    ],
  ],
  plugins: [
    [
      '@babel/transform-runtime',
      {
        helpers: false,
        regenerator: true,
      },
    ],
  ],
};

module.exports = {
  entry: {
    g2plot: './src/index.ts',
  },
  output: {
    filename: '[name].min.js',
    library: 'G2Plot',
    libraryTarget: 'umd',
    path: resolve(__dirname, 'dist/'),
  },
  resolve: {
    mainFields: ['module', 'main'],
    extensions: ['.ts', '.js', '.less'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: BABEL_OPTIONS,
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ]
      },
      {
        test: /\.js$/,
        /** bable 只需要处理 node_modules 中的 es6 模块，src 中的交给 ts-loader 即可 */
        include: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: BABEL_OPTIONS,
        },
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    ...(process.env.MODE === 'ANALYZER' ? [new BundleAnalyzerPlugin({ analyzerMode: 'static' })] : []),
  ],
  performance: {
    hints: false,
  },
  devtool: 'source-map',
};
