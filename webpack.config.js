const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
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
      // {
      //   test: /\.(png|jpe?g|gif|svg|ico)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "images/[name].[ext]?[hash]",
      //       }
      //     },
      //   ],
      // },
      // {
      //   loader: "url-loader",
      //   options: {
      //     name: "images/[name].[ext]?[hash]",
      //     limit: 10000
      //   }
      // },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css", // 원하는 filename
    }),
  ],
};

module.exports = config;