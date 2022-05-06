const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const HtmlPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: {
    about: path.resolve("./src/about/About.tsx"),
    app: path.resolve("./src/app/App.tsx"),
    contact: path.resolve("./src/contact/Contact.tsx"),
    experience: path.resolve("./src/experience/Experience.tsx"),
    footer: path.resolve("./src/footer/Footer.tsx"),
    header: path.resolve("./src/header/Header.tsx"),
    nav: path.resolve("./src/nav/Nav.tsx"),
    portfolio: path.resolve("./src/portfolio/Portfolio.tsx"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/i,
      },
      {
        type: "asset/resource",
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
      },
    ],
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js", "json"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static"),
          to: path.resolve("dist"),
        },
      ],
    }),
    new HtmlPlugin({
      title: "Aaron Tran's Portfolio Website",
      inject: "body",
    }),
  ],
}
