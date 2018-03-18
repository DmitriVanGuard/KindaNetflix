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
		break;
	default:
		console.log('wtf????');
		break;
}

module.exports = config;
