module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: __dirname + "/dist"
    },
    devServer: {
        contentBase: "./dist"
    }

}