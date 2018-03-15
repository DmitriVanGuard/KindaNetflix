// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTermAC } from './actionCreators';

type Props = {
	showSearch?: boolean,
	searchTerm: string,
	handleSearchTermStateChange: Function
};
const Header = (props: Props) => {
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
	showSearch: false
	/* 
	searchTerm: ``,
	handleSearchTermStateChange: () => {}

	Header component will subscribe to Redux store so this props will always contain this properties, because of that, they are no longer `maybe types`
	*/
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
	handleSearchTermStateChange(evt) {
		dispatch(setSearchTermAC(evt.currentTarget.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
