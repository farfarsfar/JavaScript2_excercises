module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: "style!css" 
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react', 'stage-0']
                }
            }
        ]
    },
    devServer: {
        inline:true
    },
    resolve: {
        extensions: ['', '.js', '.css']
    }
};