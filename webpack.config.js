const path = require('path');
module.exports = {
    entry: "./src/App.tsx",
    output: {
        filename: "widget.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "ts-loader", exclude: path.resolve(__dirname, 'node_modules') },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // Styles loader.
            { test: /\.scss$/,  use: [{ loader: "style-loader" }, { loader: "css-loader" }]},
            { test: /\.css$/, use: [{ loader: "style-loader" },{ loader: "css-loader" }]}
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, './'),
        compress: true,
        port: 3000
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
};