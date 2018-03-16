// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import store from './store';

// import AsyncRoute from './AsyncRoute';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const Landing = Loadable({
	loader: () => import(`./Landing`),
	loading() {
		return <div>Loading...</div>;
	}
});

const Search = Loadable({
	loader: () => import(`./Search`),
	loading() {
		return <div>Loading...</div>;
	}
});

const Details = Loadable({
	loader: () => import(`./Details`),
	loading() {
		return <div>Loading...</div>;
	}
});

const App = () => (
	<Provider store={store}>
		<div className="app">
			<Switch>
				<Route exact path="/" component={props => <Landing {...props} />} />
				<Route
					path="/search"
					component={props => {
						const newProps = Object.assign({ shows: preload.shows }, props);
						return <Search {...newProps} />;
					}}
				/>
				<Route
					path="/details/:id"
					component={(props: { match: Match }) => (
						<Details
							{...{ show: preload.shows.find(show => show.imdbID === props.match.params.id) }}
						/>
					)}
				/>
				<Route component={FourOhFour} />
			</Switch>
		</div>
	</Provider>
);

export default App;
