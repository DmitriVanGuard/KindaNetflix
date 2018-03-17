// @flow

import React from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

type Props = {
	shows: Array<Show>,
	searchTerm: string
};

const Search = (props: Props) => (
	<div className="search">
		<Header showSearch />
		{/* Only need now showSearch because with Redux store can directly access searchTerm and handleSearchTermStateChange inside Header component */}
		<div>
			{props.shows
				.filter(show =>
					`${show.title} ${show.description}`.toUpperCase().includes(props.searchTerm.toUpperCase())
				)
				.map(show => (
					<ShowCard key={show.imdbID} {...show /* anti pattern. Better to be explicit */} />
				))}
		</div>
	</div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export const Unwrapped = Search; // only for testing purposes
export default connect(mapStateToProps)(Search);
