// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAPIDetailsTAC from './asyncActionCreators';
import Header from './Header';
import Spinner from './Spinner';

type Props = {
	show: Show,
	rating: string,
	getAPIData: Function
};

class Details extends Component<Props, Object> {
	componentDidMount() {
		if (!this.props.rating || this.props.rating === `no rating`) this.props.getAPIData();
	}

	render() {
		const { title, description, year, poster, trailer } = this.props.show;
		let ratingComponent;
		if (this.props.rating) {
			ratingComponent = <h3>{this.props.rating}</h3>;
		} else {
			ratingComponent = <Spinner />;
		}
		return (
			<div className="details">
				<Header />
				<section>
					<h1>{title}</h1>
					<h2>({year})</h2>
					{ratingComponent}
					<img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
					<p>{description}</p>
				</section>
				<div>
					<iframe
						src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&showinfo=0`}
						frameBorder="0"
						allowFullScreen
						title={`Trailer for ${title}`}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {};
	return {
		rating: apiData.rating || `no rating`
	};
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
	getAPIData() {
		dispatch(getAPIDetailsTAC(ownProps.show.imdbID));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
