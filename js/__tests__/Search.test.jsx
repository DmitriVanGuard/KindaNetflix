// @flow

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import preload from '../../data.json';
import Search, { Unwrapped as UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';

configure({ adapter: new Adapter() });

test(`Search renders correctly`, () => {
	const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm="" />);
	expect(component).toMatchSnapshot();
});

test(`Search should render correct amount of shows`, () => {
	const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm="" />);
	expect(component.find(ShowCard).length).toEqual(preload.shows.length); // In toEqual what we expect it to be
});

test(`Search should render correct amount of shows based on search term`, () => {
	const searchWord = `black`;
	const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />);

	// component.find(`input`).simulate(`change`, { target: { value: searchWord } });
	const showCount = preload.shows.filter(show =>
		`${show.title} ${show.description}`.toUpperCase().includes(searchWord.toUpperCase())
	).length;

	expect(component.find(ShowCard).length).toEqual(showCount);
});
