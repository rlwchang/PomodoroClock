const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const VENDOR_LIBS = ["react", "react-dom"]

module.exports = {
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
      {test: /.s?css$/, use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "sass-loader"]
      })}
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
}
