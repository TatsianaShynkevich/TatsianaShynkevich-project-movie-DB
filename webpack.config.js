var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/index.tsx", 
    output:{
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: "bundle.js" 
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/, 
                loader: "ts-loader", 
            },
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                  {
                    fallback: 'style-loader',
                    use: ['css-loader']
                  })
              }

        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [ 
        new ExtractTextPlugin(
          {filename: 'style.css'}
        ),
       /* new HtmlWebpackPlugin({
          inject: false,
          hash: true,
          template: './index.html',
          filename: 'index.html'
        })*/
      ]
}