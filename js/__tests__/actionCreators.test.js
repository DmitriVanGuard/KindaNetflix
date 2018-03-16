// @flow
/* eslint quotes:0 */

import moxios from 'moxios';
import { setSearchTermAC, addAPIDataAC, getAPIDetailsTAC } from '../actionCreators';

const billions = {
	title: 'Billions',
	year: '2016–',
	description:
		'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
	poster: 'b.jpg',
	imdbID: 'tt4270492',
	trailer: '_raEUMLL-ZI',
	rating: '8.6'
};

// Action creators are tested with snapshots
test(`setSearchTermAC`, () => {
	expect(setSearchTermAC(`New York`)).toMatchSnapshot(); // Because setSearchTermAC will return JSON structure
});

test(`addAPIDataAC`, () => {
	expect(addAPIDataAC(billions)).toMatchSnapshot(); // Because addAPIDataAC will return JSON structure
});

test('getAPIDetailsTAC', (done: Function /* becouse it is async */) => {
	const dispatchMock = jest.fn(); // spy function
	moxios.withMock(() => {
		// If JS will ever call axios, moxios will subtitute it withMock
		const thunk = getAPIDetailsTAC(billions.imdbID);
		thunk(dispatchMock);

		moxios.wait(() => {
			const request = moxios.requests.mostRecent(); // Did our thunk reach out to correct api
			request
				.respondWith({
					status: 200,
					response: billions
				})
				.then(() => {
					expect(request.url).toEqual(`http://localhost:3000/${billions.imdbID}`);
					expect(dispatchMock).toBeCalledWith(addAPIDataAC(billions)); // We must test addAPIDataAC before thunk calls, cos its depending on it
					done();
				});
		});
	});
});
