// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM } from './actions';

const searchTermR = (state = ``, action: Action) => {
	if (action.type === SET_SEARCH_TERM) return action.payload;
	return state;
}; // MUST RETURN NEW OBJECT, DONT MUTATE OLD ONE.  This reducer will return an object to rootReducer. When using combineReducers, it will handle Object.assign by itself behind the scenes, we just need to return new state based on action.payload

const rootReducer = combineReducers({ searchTerm: searchTermR }); // One reducer that worries about searchTerm state is searchTermR

/* Our own rootReducer
const rootReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_SEARCH_TERM:
			return setSearchTermR(state, action); // rootReducer delegates to setSearchTermR reducer. After setSearchTermR reducer returns an object, rootReducer return an object=(new state) to Redux. This new state will become new state of Redux
		default:
			return state;
	}
}; 
*/

export default rootReducer;
