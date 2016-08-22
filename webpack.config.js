var path = require('path');
var babel_setting = JSON.stringify({presets: ["react", "es2015", "stage-2"]});
module.exports = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, './app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module:{
        loaders:[{
            test: /.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader?'+babel_setting,
        }]
    }
}