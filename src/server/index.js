/* eslint no-console:0 */

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'; // StaticRouter is going to be what we replaced BrowserRouter with in node
import _ from 'lodash';
import fs from 'fs';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import stats from '../../public/react-loadable.json';

import App from '../js/App';

const port = 8080;
const baseTemplate = fs.readFileSync(`./index.html`);
const template = _.template(baseTemplate);

const server = express();

server.get(`*.js`, (req, res, next) => {
	req.url = `${req.url}.gz`;
	res.set(`Content-Encoding`, `gzip`);
	next();
});

server.use(`/public`, express.static(`./public`));

server.use((req, res) => {
	const modules = [];

	// console.log(req.url);
	const context = {}; // It will be passed to React router. The reason we passed to react router is sometimes you can be redirected so it's important to handle it
	const body = ReactDOMServer.renderToString(
		React.createElement(
			StaticRouter,
			{ location: req.url, context },
			React.createElement(
				Loadable.Capture,
				{ report: moduleName => modules.push(moduleName) },
				React.createElement(App)
			)
		)
	);

	const bundles = getBundles(stats, modules);

	const bundlesBody = bundles
		.filter(bundle => bundle.file !== `bundle.js`)
		.map(bundle => `<script src="/public/${bundle.file}"></script>`)
		.join(`\n`);

	if (context.url) {
		res.redirect(context.url);
	}

	res.write(template({ body, bundlesBody })); // {body: body}
	res.end();
});

Loadable.preloadAll().then(() => server.listen(port, () => console.log(`listening on ${port}`)));
