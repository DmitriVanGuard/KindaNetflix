'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouterDom = require('react-router-dom');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _App = require('../js/App.jsx');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 8080; // StaticRouter is going to be what we replaced BrowserRouter with in node
/* eslint no-console:0 */

var baseTemplate = _fs2.default.readFileSync('./index.html');
var template = _lodash2.default.template(baseTemplate);

var server = (0, _express2.default)();

server.use('/public', _express2.default.static('./public'));

server.use(function (req, res) {
	console.log(req.url);
	var context = {}; // It will be passed to React router. The reason we passed to react router is sometimes you can be redirected so it's important to handle it
	var body = _server2.default.renderToString(_react2.default.createElement(_reactRouterDom.StaticRouter, { location: req.url, context: context }, _react2.default.createElement(_App2.default)));

	if (context.url) {
		res.redirect(context.url);
	}

	res.write(template({ body: body })); // {body: body}
	res.end();
});

console.log('listening on ' + port);
server.listen(port);
