var path = require("path");

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
      {test: /.scss$/, use: ["style-loader", "css-loader", "sass-loader"]}
    ]
  },

}
