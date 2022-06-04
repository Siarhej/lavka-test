const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.argv[2] !== '--env=build';

// Скрипты для сайта
const SCRIPTS = env => createConfig({
    isDev: isDev,
    entry: './src/js/index.ts',
    outputFile: './dist/js/index.min.js',
    cssFile: '../css/index.min.css'
});

const createConfig = ({ isDev, entry, outputFile, cssFile }) => {
    return {
        mode: !isDev ? 'production' : 'development',
        entry: path.resolve(__dirname, entry),
        output: {
            path: path.resolve(__dirname, path.dirname(outputFile)),
            filename: path.basename(outputFile)
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader'
                },
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ],
                            plugins: [
                                '@babel/plugin-transform-react-jsx'
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                sourceMap: isDev
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        optimization: {
            minimizer: [
                new CssMinimizerPlugin({
                    minimizerOptions: {
                        preset: [
                            'default',
                            {
                                discardComments: { removeAll: true }
                            }
                        ]
                    }
                }),
                new TerserPlugin()
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: cssFile
            })
        ],
        devtool: !isDev ? false : 'source-map',
        watch: isDev,
        watchOptions: {
            ignored: /node_modules/
            // poll: 500
        }
    }
}


module.exports = SCRIPTS;
