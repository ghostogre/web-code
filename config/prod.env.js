'use strict'
module.exports = {
  NODE_ENV: '"production"',
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        loader: "style-loader!css-loader!sass-loader!postcss-loader"
      }
    ]
  }
}
