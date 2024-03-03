const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
            'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.scss$/i,
        use: [
            'style-loader', 'css-loader', 'sass-loader'
        ]
      }, 
      {
        test: /\.(?:ico|png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundel.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', './src/index.html')
    })
  ],
  stats: 'errors-only',
};
