const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
/*module.exports = {
  mode: 'development',
 entry: {
        ["@babel/polyfill", __dirname + '/app/js/app.js']
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/build/',
        filename: 'app.js',
    },
  module: {
    rules: [
    {
                test: /\.js$/,
                loader: 'babel-loader',
            },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}*/

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: __dirname + '/app/js/app.js'
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/build/',
        filename: '[name].js',
    },
    module: {
        rules: [
            
            {
                test: /\.js$/,
                loader: 'babel-loader',

            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        }),
                        scss: ExtractTextPlugin.extract({
                            use: 'css-loader!sass-loader',
                            fallback: 'vue-style-loader'
                        }),
                        sass: ExtractTextPlugin.extract({
                            use: 'css-loader!sass-loader?indentedSyntax',
                            fallback: 'vue-style-loader'
                        })
                   }
                }
            },
            {
            test: /\.scss$/,
            use: [
                "vue-style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        },
            {
                test: /\.svg$/,
                loader: 'vue-svg-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue': __dirname + '/node_modules/vue/dist/vue.common.js',
            'scss-loader': 'sass-loader'
        },
        extensions: ['.vue', '.js']
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['build'], {
            root: __dirname,
            verbose: false,
            dry: false
        }),
    ],
    devServer: {
        stats: "errors-only"
    }
};