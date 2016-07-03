
const webpack = require('webpack')

const config = {
  entry: './src/entry.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.js$/, include: /jsxcss/, loader: 'babel' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.md/, loader: 'html!markdown' },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      h: 'jsxcss/src/hcxs'
    })
  ],
  devServer: {
    contentBase: 'build'
  }
}

module.exports = config

