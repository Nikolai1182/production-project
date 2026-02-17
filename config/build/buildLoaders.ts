import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    type: "javascript/auto",
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          esModule: false,
          importLoaders: 1,
          modules: {
            auto: /\.module\.(scss|sass|css)$/i,
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
            namedExport: false,
          },
        },
      },
      "sass-loader",
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const fileLoader =  {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [tsLoader, cssLoader, svgLoader, fileLoader];
}
