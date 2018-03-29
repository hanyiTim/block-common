var webpack = require('webpack'),
    path = require('path');

const config = {
    entry:{
        "block-common":'./index.js',
        "block-common.min":'./index.js'
    },
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'[name].js',
        libraryTarget: 'umd',
        library: 'commom'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                },
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            output: { comments: false }
        })
    ]
}

module.exports = config;