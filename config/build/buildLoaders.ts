import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

  console.log('buildLoaders isDev =', isDev);
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    type: "javascript/auto",
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          esModule: true,
          importLoaders: 1,
          modules: {
            auto: /\.module\.(scss|sass|css)$/i,
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  console.log('CSS loader rule active for SCSS modules');


  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [tsLoader, cssLoader];
}
