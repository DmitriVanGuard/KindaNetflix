// @flow

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
	reducer,
	process.env.NODE_ENV === `development`
		? compose(
				applyMiddleware(thunk),
				window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
		  )
		: compose(applyMiddleware(thunk))
);

export default store;
