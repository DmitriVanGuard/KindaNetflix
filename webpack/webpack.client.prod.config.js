/* eslint-disable */

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
		extensions: ['.js', '.jsx', '.json']
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
		// minimize: {
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
				loader: 'babel-loader'
			}
		]
	}
});
