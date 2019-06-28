var path = require("path");

module.exports = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      "@aliased": path.join(__dirname, "src")
    }
  },
  module: {
    rules: [{ test: /\.handlebars$/, loader: "handlebars-loader" }]
  }
};
