// @flow

import React from 'react';
import { configure, shallow, render } from 'enzyme'; // `render` render all the markup. `shallow` render as a component
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../store';
import { setSearchTermAC } from '../actionCreators';
import preload from '../../../data.json';
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
	const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />); // shallow render as component

	// component.find(`input`).simulate(`change`, { target: { value: searchWord } });
	const showCount = preload.shows.filter(show =>
		`${show.title} ${show.description}`.toUpperCase().includes(searchWord.toUpperCase())
	).length;

	expect(component.find(ShowCard).length).toEqual(showCount);
});

test(`Search should render correct amount of shows based on search term (user interaction) and dispatching action to Redux`, () => {
	const searchWord = `black`;
	store.dispatch(setSearchTermAC(searchWord)); // dispatching action to the store directly
	const component = render(
		<Provider store={store}>
			<MemoryRouter>
				<Search shows={preload.shows} searchTerm={searchWord} />
			</MemoryRouter>
		</Provider>
	);

	const showCount = preload.shows.filter(show =>
		`${show.title} ${show.description}`.toUpperCase().includes(searchWord.toUpperCase())
	).length;

	expect(component.find(`.show-card`).length).toEqual(showCount); // can use only css selector, not ShowCards because `render` renders only html markup
});
