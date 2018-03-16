// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import AsyncRoute from './AsyncRoute';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
	<Provider store={store}>
		<div className="app">
			<Switch>
				<Route
					exact
					path="/"
					component={props => (
						<AsyncRoute
							props={props}
							loadingPromise={import(/* webpackChunkName: 'Landing' */ `./Landing`)}
						/>
					)}
				/>
				<Route
					path="/search"
					component={props => (
						<AsyncRoute
							props={Object.assign({ shows: preload.shows }, props)}
							loadingPromise={import(/* webpackChunkName: 'Search' */ `./Search`)}
						/>
					)}
				/>
				<Route
					path="/details/:id"
					component={(props: { match: Match }) => (
						<AsyncRoute
							props={{ show: preload.shows.find(show => show.imdbID === props.match.params.id) }}
							loadingPromise={import(/* webpackChunkName: "Details" */ `./Details`)}
						/>
					)}
				/>
				<Route component={FourOhFour} />
			</Switch>
		</div>
	</Provider>
);

export default App;
