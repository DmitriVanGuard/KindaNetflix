/* eslint-disable */

module.exports = ({ webpack, path, __dirname }) => ({
	context: __dirname,
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'regenerator-runtime/runtime.js',
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
	plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
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