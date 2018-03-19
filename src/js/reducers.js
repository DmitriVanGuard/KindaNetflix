// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

const searchTermR = (state = ``, action: Action) => {
	if (action.type === SET_SEARCH_TERM) return action.payload;
	return state;
}; // MUST RETURN NEW OBJECT, DONT MUTATE OLD ONE.  This reducer will return an object to rootReducer. When using combineReducers, it will handle Object.assign by itself behind the scenes, we just need to return new state based on action.payload

const apiDataR = (state = {}, action: Action) => {
	if (action.type === ADD_API_DATA)
		return Object.assign({}, state, { [action.payload.imdbID]: action.payload });
	return state;
};

const rootReducer = combineReducers({ searchTerm: searchTermR, apiData: apiDataR }); // One reducer that worries about searchTerm state is searchTermR

export default rootReducer;
