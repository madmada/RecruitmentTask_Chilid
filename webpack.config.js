const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js',
    './style/style.scss'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }
  ],
  rules: [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    }
  ],
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/bundle.css',
      allChunks: true,
    }),
  ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
