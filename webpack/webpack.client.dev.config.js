/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

const projectRoot = path.resolve(__dirname, '../');

module.exports = {
	context: projectRoot,
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'regenerator-runtime/runtime.js',
		'./src/js/ClientApp.jsx'
	],
	devtool: 'cheap-eval-source-map',
	output: {
		path: path.join(projectRoot, 'public'),
		filename: 'bundle.js',
		chunkFilename: '[name].chunk.js',
		publicPath: '/public/'
	},
	devServer: {
		hot: true,
		publicPath: '/public/',
		historyApiFallback: true // When server does not recognize route -> (not good in production) client side will worry about the routing
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	optimization: {},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new ReactLoadablePlugin({
			filename: './public/react-loadable.json'
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
				loader: 'babel-loader'
			}
		]
	}
};
