import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../js/Search';

configure({ adapter: new Adapter() });

test(`Search renders correctly`, () => {
	const component = shallow(<Search />);
	expect(component).toMatchSnapshot();
});
