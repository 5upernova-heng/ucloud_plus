const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    output: {
                        comments:
                            /==\/?UserScript==|^[ ]?@|eslint-disable|spell-checker/i,
                    },
                },
            }),
        ],
    },
    performance: {
        hints: false,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `// ==UserScript==
// @name    ucloud_plus
// @version 1.0
// @description 北京邮电大学云邮教学空间优化脚本
// @author  5upernova-heng
// @grant   GM_getValue
// @grant   GM_setValue
// @grant   GM_xmlhttpRequest
// @match   https://ucloud.bupt.edu.cn/uclass/*
// @downloadURL https://fastly.jsdelivr.net/gh/5upernova-heng/ucloud_plus@master/dist/main.js
// @updateURL   https://fastly.jsdelivr.net/gh/5upernova-heng/ucloud_plus@master/dist/main.js
// @icon    https://ucloud.bupt.edu.cn/favicon.ico
// ==/UserScript==
            `,
            raw: true,
            entryOnly: true,
        }),
    ],
};
