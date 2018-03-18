/* eslint no-console:0 */

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'; // StaticRouter is going to be what we replaced BrowserRouter with in node
import _ from 'lodash';
import fs from 'fs';
import App from '../js/App';

const port = 8080;
const baseTemplate = fs.readFileSync(`./index.html`);
const template = _.template(baseTemplate);

const server = express();

server.use(`/public`, express.static(`./public`));

server.use((req, res) => {
	console.log(req.url);
	const context = {}; // It will be passed to React router. The reason we passed to react router is sometimes you can be redirected so it's important to handle it
	const body = ReactDOMServer.renderToString(
		React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App))
	);

	if (context.url) {
		res.redirect(context.url);
	}

	res.write(template({ body })); // {body: body}
	res.end();
});

console.log(`listening on ${port}`);
server.listen(port);
