const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const config = {
  entry: "./public/javascripts/index.js",
  output: {
    path: path.resolve(__dirname, "./public/bundle"),
    filename: "index.bundle.js",
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
      //css 로더는 js파일에 css파일 import할 수 있게 해줌
      //MiniCssExtractPlugin.loader: css 파일 수 만큼 style 태그가 생기는 것을 방지
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css", // 원하는 filename, 아웃풋 경로에 생성
      // chunkFilename: "style.css",
    }),
  ],
};

module.exports = config;