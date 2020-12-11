const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    configureWebpack: {
        output: {
            filename : "assets/js/[name].js",
            chunkFilename: 'assets/js/[name].js',
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [{
                    from: 'src/helper',
                    to: 'assets/lib'
                }],
            }),
            // new CopyWebpackPlugin({
            //     patterns: [{
            //         from: 'src/assets/images',
            //         to: 'assets/images'
            //     }],
            // })
        ],
        module: {
            rules: [
                {
                    test: /\.(jpg|png|gif)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                regExp: /(images\/.*)/,
                                name: "[name].[ext]",
                                publicPath: "assets/images/",
                                outputPath: "assets/images/"
                            }
                        }
                    ]
                }
            ]
        }
    },
    css: {
        loaderOptions: {
            sass:  {
                prependData: `@import "~@/assets/sass/_variables.scss";
                              @import "~@/assets/sass/_mixins.scss";`
            }
        }
    }
}
