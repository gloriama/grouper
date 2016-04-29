module.exports = {
  entry: './client/index.js', // update this depending on file structure
  output: {
    path: __dirname, // path to place output
    publicPath: '/', // path for <script> tag to include output
    filename: 'bundle.js'
  },
  module: {
    loaders: [{ // use Babel to transpile all files except node_modules
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'] // extensions used to resolve modules
  },
  devServer: { // settings for webpack-dev-server
    historyApiFallback: true,
    contentBase: './'
  }
};