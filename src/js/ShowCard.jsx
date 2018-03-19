// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Will return div that have this style
const Wrapper = styled(Link)`
	width: 32%;
	border: 2px solid #333;
	border-radius: 4px;
	margin-bottom: 25px;
	padding-right: 10px;
	overflow: hidden;
	color: black;
	text-decoration: none;
`; /* It is a tag tamplate literal */
// When rendering element, styled will create new style tag with these styles

const Image = styled.img`
	width: 46%;
	float: left;
	margin-right: 10px;
`;

type Props = Show;

class ShowCard extends Component<Props, any> {
	shouldComponentUpdate() {
		return false; // Once this component rendered for the first time -> never update it
	}
	render() {
		return (
			<Wrapper
				className="show-card"
				to={`/details/${this.props.imdbID}`}
				href={`/details/${this.props.imdbID}`}
			>
				{/* Wrapper can also contain className */}
				<Image
					src={`/public/img/posters/${this.props.poster}`}
					alt={`${this.props.title} Show Poster`}
				/>
				<div>
					<h3>{this.props.title}</h3>
					<h4>({this.props.year})</h4>
					<p>{this.props.description}</p>
				</div>
			</Wrapper>
		);
	}
}

export default ShowCard;
