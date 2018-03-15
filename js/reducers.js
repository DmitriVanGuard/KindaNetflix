import { SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
	searchTerm: `asd`
};

const setSearchTermR = (state, action) => Object.assign({}, state, { searchTerm: action.payload }); // MUST RETURN NEW OBJECT, DONT MUTATE OLD ONE.  This reducer will return an object to rootReducer

const rootReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_SEARCH_TERM:
			return setSearchTermR(state, action); // rootReducer delegates to setSearchTermR reducer. After setSearchTermR reducer returns an object, rootReducer return an object=(new state) to Redux. This new state will become new state of Redux
		default:
			return state;
	}
};

export default rootReducer;
