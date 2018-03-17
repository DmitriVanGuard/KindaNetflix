// @flow

import Loadable from 'react-loadable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// const renderApp = () => {
// 	render(
// 		<BrowserRouter>
// 			{ Moved BrowserRouter to here, because for SSR node doest not understand BrowserRouter => BrowserRouter should be only on client }
// 			<App />
// 		</BrowserRouter>,
// 		// $FlowFixMe
// 		document.getElementById(`app`)
// 	);
// };
// const renderApp = () => {

Loadable.preloadReady().then(() => {
	ReactDOM.hydrate(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		// $FlowFixMe
		document.getElementById(`app`)
	);
});
// };
// renderApp();

// if (module.hot) {
// 	// only available in dev
// 	module.hot.accept(`./App`, () => {
// 		renderApp();
// 	});
// }
