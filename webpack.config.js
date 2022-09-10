const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const config = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./routes/dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      //MiniCssExtractPlugin.loader: css파일만큼 style 태그가 생기는 것을 방지
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css", // 원하는 filename
    }),
  ],
};

module.exports = config;