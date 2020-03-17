const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output:  {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
}