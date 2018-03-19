import React from 'react';
import Loadable from 'react-loadable';
import Spinner from './Spinner';

export const Landing = Loadable({
	loader: () => import(/* webpackChunkName: 'Landing' */ `./Landing`),
	loading() {
		return <Spinner />;
	}
});

export const Details = Loadable({
	loader: () => import(/* webpackChunkName: 'Details' */ `./Details`),
	loading() {
		return <Spinner />;
	}
});

export const Search = Loadable({
	loader: () => import(/* webpackChunkName: 'Search' */ `./Search`),
	loading() {
		return <Spinner />;
	}
});
