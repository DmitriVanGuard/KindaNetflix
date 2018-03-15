import { SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
	searchTerm: ``
};

const setSearchTerm = (state, action) => Object.assign({}, state, { searchTerm: action.payload }); // MUST RETURN NEW OBJECT, DONT MUTATE OLD ONE

const rootReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_SEARCH_TERM:
			return setSearchTerm(state, action); // rootReducer delegates to setSearchTerm reducer
		default:
			return state;
	}
};

export default rootReducer;
