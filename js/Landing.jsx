import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
	<div className="landing">
		<h1>KindaNetflix</h1>
		<input type="text" placeholder="Search" />
		<Link href="/search" to="/search">
			or Browse All
		</Link>
	</div>
);

export default Landing;
