import * as path from "path";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserWebpackPlugin from "terser-webpack-plugin";
import { Configuration } from "webpack";
import merge from "webpack-merge";

const isProduction = process.env.NODE_ENV === "production";

const common: Partial<Configuration> = {
  mode: isProduction ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
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
    extensions: [".js", ".ts"],
  },
};

const main: Configuration = merge(common, {
  entry: path.resolve(__dirname, "src/main.ts"),
  output: {
    filename: "main.js",
  },
  target: "electron-main",
});

const renderer: Configuration = merge(common, {
  entry: path.resolve(__dirname, "src/renderer.ts"),
  output: {
    filename: "renderer.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "build/index.html"),
      inject: "body",
      minify: isProduction,
      template: path.resolve(__dirname, "static/index.html"),
    }),
  ],
  target: "electron-renderer",
});

export default [main, renderer];
