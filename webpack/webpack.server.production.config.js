/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
	context: __dirname,
	entry: '../server/index.js',
	output: {
		path: path.join(__dirname, '../server'),
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
