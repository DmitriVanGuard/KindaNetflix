/* eslint-disable */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = ({ webpack, path, __dirname }) => ({
	context: __dirname,
	entry: {
		// vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-redux'],
		app: ['regenerator-runtime/runtime.js', './js/ClientApp.jsx']
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		chunkFilename: '[id]-[hash].chunk.js',
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
	optimization: {
		// splitChunks: {
		// name: 'vendor',
		// filename: 'vendor_[hash].js',
		// minChunks: 2
		// }
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					compress: {
						reduce_vars: false // Must be false in order to enable PREACT
					}
				}
			})
		]
		// {
		// 	compress: {
		// 		unused: true,
		// 		dead_code: true,
		// 		warnings: false,
		// 		screw_ie8: true
		// 	}
		// }
	},
	plugins: [],
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
	}
});
