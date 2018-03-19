// @flow

import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export function setSearchTermAC(searchTerm: string) {
	return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addAPIDataAC(apiData: Show) {
	return { type: ADD_API_DATA, payload: apiData };
}

