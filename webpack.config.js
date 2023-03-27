const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.m?js$/,
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
    performance: {
        hints: false,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
