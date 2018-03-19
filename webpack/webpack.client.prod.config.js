/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const projectRoot = path.resolve(__dirname, '../');

module.exports = {
	context: projectRoot,
	entry: ['regenerator-runtime/runtime.js', './src/js/ClientApp.jsx'],
	output: {
		path: path.join(projectRoot, 'public'),
		filename: 'bundle.js',
		chunkFilename: '[id]-[chunkhash].chunk.js',
		publicPath: '/public/'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			react: 'preact-compat',
			'react-dom': 'preact-compat'
		}
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},

	plugins: [
		new CleanWebpackPlugin(['public/*.js', 'public/*.js.gz', 'public/*.json'], {
			root: projectRoot,
			verbose: true
		}),
		new ReactLoadablePlugin({
			filename: './public/react-loadable.json'
		}),
		new CompressionPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.html$/
		})
	],
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: [path.resolve('src/js'), path.resolve('node-modules/preact-compat/src')]
			}
		]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					compress: {
						reduce_vars: false // Must be false in order to enable PREACT
					}
				}
			})
		]
	}
};
