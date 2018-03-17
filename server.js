/* eslint no-console:0 */
require(`babel-register`); // Everything in this file will not be transpiled, but everything that requires will run throw babel
const RLW = require(`react-loadable/webpack`);
const express = require(`express`);
const React = require(`react`);
const ReactDOMServer = require(`react-dom/server`);
const ReactRouter = require(`react-router-dom`);
const _ = require(`lodash`);
const fs = require(`fs`);
const Loadable = require(`react-loadable`);
const App = require(`./js/App`).default;
const stats = require(`./react-loadable.json`);
const { getBundles } = RLW;
const { StaticRouter } = ReactRouter; // StaticRouter is going to be what we replaced BrowserRouter with in node
const port = 8080;
const baseTemplate = fs.readFileSync(`./index.html`);
const template = _.template(baseTemplate);

const server = express();

server.use(`/public`, express.static(`./public`));

server.use((req, res) => {
	const modules = [];

	console.log(req.url);
	const context = {}; // It will be passed to React router. The reason we passed to react router is sometimes you can be redirected so it's important to handle it
	/* const body = ReactDOMServer.renderToString(
		React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App))
	); */
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

	console.log(bundles);
	const scriptBundle = bundles
		.map(bundle => `<script src="/dist/${bundle.file}"></script>`)
		.join(`\n`);

	if (context.url) {
		res.redirect(context.url);
	}

	res.write(template({ body, scriptBundle })); // {body: body}
	res.end();
});

Loadable.preloadAll().then(() => {
	server.listen(port, () => {
		console.log(`listening on ${port}`);
	});
});
