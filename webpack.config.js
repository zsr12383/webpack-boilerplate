const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map", //크롬에서 디버깅 가능하도록 원본코드같이 bundle
  entry: "./src/index.js", //진입점
  output: {
    path: path.resolve(__dirname, "public"), // bundle만들어질 장소
    filename: "index.bundle.js", // bundle 될 파일 이름
    publicPath: "http://localhost:3000/public" //웹팩 미들웨어 장소
  },
  module: {
    rules: [
      {
        test: /\.js$/, //.js 파일 templating
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: 'style.css',
    }),
  ],
};