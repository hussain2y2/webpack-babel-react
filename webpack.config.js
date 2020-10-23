const { join, resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: 'src/index.js',
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  resolve: {
    alias: {
      src: resolve(__dirname, 'src/')
    },
    extensions: ['.js', '.jsx']
  },
  output: {
    path: resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }, {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          filename: '[name].js'
        }
      }
    }
  },
  devServer: {
    contentBase: join(__dirname, 'public'),
    compress: true,
    open: true
  }
}
