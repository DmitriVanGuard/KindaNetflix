// @flow
/* eslint-disable quotes */

import { setSearchTermAC, addAPIDataAC } from '../actionCreators';

// Action creators are tested with snapshots
test(`setSearchTermAC`, () => {
	expect(setSearchTermAC(`New York`)).toMatchSnapshot(); // Because setSearchTermAC will return JSON structure
});

test(`addAPIDataAC`, () => {
	expect(
		addAPIDataAC({
			title: 'Billions',
			year: '2016–',
			description:
				'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
			poster: 'b.jpg',
			imdbID: 'tt4270492',
			trailer: '_raEUMLL-ZI',
			rating: '8.6'
		})
	).toMatchSnapshot(); // Because addAPIDataAC will return JSON structure
});
