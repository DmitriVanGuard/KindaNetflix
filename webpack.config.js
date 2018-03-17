const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const RLP = require('react-loadable/webpack');

const config = {
	context: __dirname,
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./js/ClientApp.jsx'
	],
	devtool: 'cheap-eval-source-map',
	output: {
		path: path.join(__dirname, 'public'),
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
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new RLP.ReactLoadablePlugin({
			filename: './react-loadable.json'
		})
	],
	optimization: {
		splitChunks: {
			name: 'manifest',
			minChunks: Infinity
		}
	},
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

if (process.env.NODE_ENV === `production`) {
	config.entry = `./js/ClientApp.jsx`;
	config.devtool = false;
	delete config.devServer;
	delete config.plugins;
	config.plugins = [
		new UglifyJsPlugin({
			uglifyOptions: {
				compress: false,
				mangle: false,
				keep_fnames: true
			},
			sourceMap: true
		})
	];
	// console.log(webpack.optimize.UglifyJsPlugin);
}

module.exports = config;
