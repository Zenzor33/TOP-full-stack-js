const path = require("path");

module.exports = {
  entry: "./src/index.js",
  devtool: "eval-source-map",
  output: {
    filename: "main.js",
    // filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
  },
};
