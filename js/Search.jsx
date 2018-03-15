// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

type Props = {
	shows: Array<Show>
};

type State = {
	searchTerm: string
};

class Search extends Component<Props, State> {
	state = {
		searchTerm: ``
	};

	handleSearchTermStateChange = (evt: SyntheticKeyboardEvent<HTMLInputElement>) => {
		this.setState({ searchTerm: evt.currentTarget.value });
	};

	render() {
		return (
			<div className="search">
				<Header
					showSearch
					searchTerm={this.state.searchTerm}
					handleSearchTermStateChange={this.handleSearchTermStateChange}
				/>
				<div>
					{this.props.shows
						.filter(show =>
							`${show.title} ${show.description}`
								.toUpperCase()
								.includes(this.state.searchTerm.toUpperCase())
						)
						.map(show => (
							<ShowCard key={show.imdbID} {...show /* anti pattern. Better to be explicit */} />
						))}
				</div>
			</div>
		);
	}
}

export default Search;
