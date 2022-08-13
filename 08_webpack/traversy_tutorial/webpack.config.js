const path = require('path')

module.exports = {
mode: 'development',
// entry: path.resolve(__dirname, 'src/index.js'),
// set multiple entry points by making this an object.
entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
},
output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: "bundle.js",
    filename: "[name].js",
},
module: {
    rules: [
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }
    ]
}
}

