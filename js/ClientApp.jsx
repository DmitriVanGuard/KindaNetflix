// @flow

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const renderApp = () => {
	render(
		<BrowserRouter>
			{/* Moved BrowserRouter to here, because for SSR node doest not understand BrowserRouter => BrowserRouter should be only on client */}
			<App />
		</BrowserRouter>,
		// $FlowFixMe
		document.getElementById(`app`)
	);
};

renderApp();

if (module.hot) {
	// only available in dev
	module.hot.accept(`./App`, () => {
		renderApp();
	});
}
