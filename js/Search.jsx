import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
	state = {
		searchTerm: ``
	};

	handleSearchTermStateChange = evt => {
		this.setState({ searchTerm: evt.target.value });
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
