
const config = {
  entry: './src/yo.js',
  output: {
    path: __dirname + '/demo',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  devServer: {
  }
}

module.exports = config

