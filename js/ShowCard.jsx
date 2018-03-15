// @flow

import React from 'react';
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

const ShowCard = (props: Show) => (
	<Wrapper to={`/details/${props.imdbID}`} href={`/details/${props.imdbID}`}>
		{/* Wrapper can also contain className */}
		<Image src={`/public/img/posters/${props.poster}`} alt={`${props.title} Show Poster`} />
		<div>
			<h3>{props.title}</h3>
			<h4>({props.year})</h4>
			<p>{props.description}</p>
		</div>
	</Wrapper>
);

export default ShowCard;
