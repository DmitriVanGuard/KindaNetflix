// @flow

import axios from 'axios';
import { addAPIDataAC } from './actionCreators';

export default function getAPIDetailsTAC(imdbID: string) {
	// Handle thunk async request
	// Normal actionCreators return an object, Thunk actionCreator will return a function - thunk
	return (dispatch: Function) => {
		axios
			.get(`http://localhost:3000/${imdbID}`)
			.then(response => {
				dispatch(addAPIDataAC(response.data)); // Dispatching new action made by addAPIDataAC to rootReducer.
			})
			.catch(error => console.error(`API request error ->`, error)); // eslint-disable-line no-console
	};
}
