/* eslint-disable */

const path = require('path');
const webpack = require('webpack');

let config;

switch (process.env.NODE_ENV) {
	case 'development':
		config = require('./webpack/webpack.client.dev.config')({ webpack, path, __dirname });
		break;
	case 'production':
		config = require('./webpack/webpack.client.prod.config')({ webpack, path, __dirname });
		break;
	case 'server':
		config = require('./webpack/webpack.client.dev.config')({ webpack, path, __dirname });
		break;
	default:
		console.log('wtf????');
		config = require('./webpack/webpack.client.dev.config')({ webpack, path, __dirname });
		break;
}

module.exports = config;
