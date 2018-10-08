const path = require('path')

console.log(path.join(__dirname, '../backend/web'))

module.exports = {
  entry: [
    './src/index.js'
  ],
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
        loader: 'url-loader?limit=10',
      },

    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, './public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    port: 8008,
    host: '0.0.0.0',
    contentBase: './public',
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    },
  },
}

