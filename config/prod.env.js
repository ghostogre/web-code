'use strict'
module.exports = {
  NODE_ENV: '"production"',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  }
}
