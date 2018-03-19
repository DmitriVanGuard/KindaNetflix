// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// import AsyncRoute from './AsyncRoute';
import { Landing, Search, Details } from './loadableRoutes';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
	<Provider store={store}>
		<div className="app">
			<Switch>
				<Route exact path="/" render={props => <Landing {...props} />} />
				<Route path="/search" render={() => <Search shows={preload.shows} />} />
				<Route
					path="/details/:id"
					render={(props: { match: Match }) => (
						<Details show={preload.shows.find(show => show.imdbID === props.match.params.id)} />
					)}
				/>
				<Route component={FourOhFour} />
			</Switch>
		</div>
	</Provider>
);

export default App;
