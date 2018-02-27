module.exports = {
  entry: './src/app/index.js',
  output: {
    path: __dirname + '/assets/js',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: 'css-loader'
      },
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
  // module: {
  //   loaders: [
  //     {
  //       test: /\.jsx$/,
  //       loader: 'babel-loader'
  //     }
  //   ]
  // },
};