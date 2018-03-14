// @flow

import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

type Props = {};

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
				<header>
					<h1>KindaNetflix</h1>
					<input
						type="text"
						value={this.state.searchTerm}
						onChange={this.handleSearchTermStateChange}
						placeholder="Search"
					/>
				</header>
				<div>
					{preload.shows
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
