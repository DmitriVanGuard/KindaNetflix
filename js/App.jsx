// @flow

import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import routes from './rrv4/routes';
import { convertCustomRouteConfig } from './rrv4/rrv4Helpers';

// import AsyncRoute from './AsyncRoute';
// import preload from '../data.json';

const routeConfig = convertCustomRouteConfig(routes);

// const FourOhFour = () => <h1>404</h1>;

const App = () => (
	<Provider store={store}>
		<div className="app">{renderRoutes(routeConfig)}</div>
	</Provider>
);

export default App;
