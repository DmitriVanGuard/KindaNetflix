// @flow

import { SET_SEARCH_TERM } from './actions';

export function setSearchTermAC(searchTerm: string) {
	return { type: SET_SEARCH_TERM, payload: searchTerm };
}
