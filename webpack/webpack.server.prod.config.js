/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: '../server/index.js',
	output: {
		path: path.join(__dirname, '../server'),
		filename: 'server.js'
	},
	target: 'node',
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			react: 'preact-compat',
			'react-dom': 'preact-compat'
		}
	},
	externals: [nodeExternals()],
	stats: {
		colors: true,
		reasons: true
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
	},
	plugins: [
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1
		})
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: [path.resolve('js'), path.resolve('node-modules/preact-compat/src')]
			}
		]
	}
};
