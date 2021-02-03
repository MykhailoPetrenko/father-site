const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: ["./src/index.tsx", "./src/styles/index.scss"],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build"),
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 8080,
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  /*externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },*/

  mode: "development",

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

      // sass / scss loader for webpack
      {
        test: /\.(scss|css)$/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",

          "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".css"],
  },
};
