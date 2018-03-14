import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: `this is some sort of debug statement`
		};
		this.handleSearchTermStateChange = this.handleSearchTermStateChange.bind(this);
	}

	handleSearchTermStateChange(evt) {
		this.setState({ searchTerm: evt.target.value });
	}

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
					{preload.shows.map(show => (
						<ShowCard key={show.imdbID} {...show /* anti patter. Better to be explicit */} />
					))}
				</div>
			</div>
		);
	}
}

export default Search;
