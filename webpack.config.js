// webpack.config.js
module.exports = {
    // ...
    resolve: {
      fallback: {
        fs: false,
        // other Node.js built-ins you might need
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify'),
      }
    }
  };