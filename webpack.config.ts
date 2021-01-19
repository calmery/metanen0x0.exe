import * as path from "path";
import CopyWebpackPlugin from "copy-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserWebpackPlugin from "terser-webpack-plugin";
import { Configuration } from "webpack";
import merge from "webpack-merge";
import packageJson from "./package.json";

const isProduction = process.env.NODE_ENV === "production";

const common: Partial<Configuration> = {
  devtool: isProduction ? undefined : "source-map",
  mode: isProduction ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
      },
    ],
  },
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
      }),
    ],
  },
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};

const main: Configuration = merge(common, {
  entry: path.resolve(__dirname, "src/main"),
  output: {
    filename: "main.js",
  },
  target: "electron-main",
});

const renderer: Configuration = merge(common, {
  entry: path.resolve(__dirname, "src/renderer"),
  output: {
    filename: "renderer.js",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "build"),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "build/renderer.html"),
      inject: "body",
      minify: isProduction,
      title: packageJson.name,
    }),
  ],
  target: "electron-renderer",
});

export default [main, renderer];
