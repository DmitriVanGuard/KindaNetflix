import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

// Will return div that have this style
const Wrapper = styled.div`
	width: 32%;
	border: 2px solid #333;
	border-radius: 4px;
	margin-bottom: 25px;
	padding-right: 10px;
	overflow: hidden;
`; /* It is a tag tamplate literal */
// When rendering element, styled will create new style tag with these styles

const Image = styled.img`
	width: 46%;
	float: left;
	margin-right: 10px;
`;

const ShowCard = props => (
	<Wrapper>
		{/* Wrapper can also contain className */}
		<Image src={`/public/img/posters/${props.poster}`} alt={`${props.title} Show Poster`} />
		<div>
			<h3>{props.title}</h3>
			<h4>({props.year})</h4>
			<p>{props.description}</p>
		</div>
	</Wrapper>
);

ShowCard.propTypes = {
	poster: string.isRequired,
	title: string.isRequired,
	year: string.isRequired,
	description: string.isRequired
};

export default ShowCard;
