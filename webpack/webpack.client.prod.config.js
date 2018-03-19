/* eslint-disable */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = ({ webpack, path, __dirname }) => ({
	context: __dirname,
	entry: ['regenerator-runtime/runtime.js', './js/ClientApp.jsx'],
	output: {
		path: path.join(__dirname, 'public'),
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
		new CleanWebpackPlugin(['public/*.js', 'public/*.json'], {
			root: __dirname,
			verbose: true
		}),
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
				loader: 'babel-loader',
				include: [path.resolve('js'), path.resolve('node-modules/preact-compat/src')]
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
});
