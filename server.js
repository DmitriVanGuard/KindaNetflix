/* eslint no-console:0 */

require(`babel-register`); // Everything in this file will not be transpiled, but everything that requires will run throw babel
const express = require(`express`);
const React = require(`react`);
const ReactDOMServer = require(`react-dom/server`);
const ReactRouter = require(`react-router-dom`);
const _ = require(`lodash`);
const fs = require(`fs`);
const App = require(`./js/App`).default;

const { StaticRouter } = ReactRouter; // StaticRouter is going to be what we replaced BrowserRouter with in node
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
