/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const projectRoot = path.resolve(__dirname, '../');

module.exports = {
	context: projectRoot,
	entry: './src/server/index.js',
	output: {
		path: path.join(projectRoot, 'public'),
		filename: 'server.js'
	},
	target: 'node',
	resolve: {
		extensions: ['.js', '.jsx', '.json']
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
				loader: 'babel-loader'
			}
		]
	}
};
