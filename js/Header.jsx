// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props: {
	showSearch?: boolean,
	searchTerm?: string,
	handleSearchTermStateChange?: Function
}) => {
	let utilSpace;
	if (props.showSearch) {
		utilSpace = (
			<input
				type="text"
				value={props.searchTerm}
				onChange={props.handleSearchTermStateChange}
				placeholder="Search"
			/>
		);
	} else {
		utilSpace = (
			<h2>
				<Link to="/search" href="/search">
					Back
				</Link>
			</h2>
		);
	}
	return (
		<header>
			<h1>
				<Link to="/" href="/">
					KindaNetflix
				</Link>
			</h1>
			{utilSpace}
		</header>
	);
};

Header.defaultProps = {
	showSearch: false,
	searchTerm: ``,
	handleSearchTermStateChange: () => {}
};

export default Header;
