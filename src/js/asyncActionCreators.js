// @flow

import axios from 'axios';
import { addAPIDataAC } from './actionCreators';

export default function getAPIDetailsTAC(imdbID: string) {
	// Handle thunk async request
	// Normal actionCreators return an object, Thunk actionCreator will return a function - thunk
	return async (dispatch: Function) => {
		try {
			const response = await axios.get(`http://localhost:3000/${imdbID}`);
			dispatch(addAPIDataAC(response.data)); // Dispatching new action made by addAPIDataAC to rootReducer.
		} catch (err) {
			console.error(`Fetching rating error ->`, err); // eslint-disable-line
		}
	};
}
