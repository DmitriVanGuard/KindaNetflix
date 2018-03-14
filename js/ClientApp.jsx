import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
	render(<App />, document.getElementById(`app`));
};

renderApp();

if (module.hot) {
	// only available in dev
	module.hot.accept(`./App`, () => {
		renderApp();
	});
}
