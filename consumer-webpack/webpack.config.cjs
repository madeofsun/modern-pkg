const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env) => ({
  entry: "./src/index.ts",
  mode: env.dev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".mjs", ".cjs"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "entry.js",
  },
  plugins: [new HtmlWebpackPlugin()],
});
