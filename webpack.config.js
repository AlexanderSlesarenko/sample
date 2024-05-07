const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  devtool: false,
  output: {
    clean: true,
    path: path.resolve("./dist/"),
    filename: "[name].[hash:8].js",
    publicPath: "/dist/",
  },
  mode: "production",
  target: ["web", "es5"],
  entry: "./src/main.js",
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          keep_classnames: true,
          keep_fnames: true,
          compress: false,
          format: {
            max_line_len: 100,
            beautify: true,
          },
        },
      }),
    ],
  },
};
