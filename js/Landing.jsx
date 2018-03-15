// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTermAC } from './actionCreators';

const Landing = (props: { searchTerm: string, handleSearchTermStateChange: Function }) => (
	<div className="landing">
		<h1>KindaNetflix</h1>
		<input
			value={props.searchTerm}
			type="text"
			onChange={props.handleSearchTermStateChange} // handleSearchTermStateChange will be injected from mapDispatchToProps (line 27)
			placeholder="Search"
		/>
		<Link href="/search" to="/search">
			or Browse All
		</Link>
	</div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
/* This function will take only things from Redux store that Landing component cares about and put them into its props 
	and it does it by using `connect` function
*/
const mapDispatchToProps = (dispatch: Function) => ({
	handleSearchTermStateChange(event) {
		dispatch(setSearchTermAC(event.currentTarget.value)); // setSearchTermAC is function from actionCreaters and will return object = action
		// dispatch will send a state+action(retrieved from setSearchTermAC) to Redux ( and eventually to rootReducer)
	}
});
/*
	mapDispatchToProps - will created methods that Landing will later invoke to dispatch events to Redux
	Will return object. Evething in this object will injected as props inside Landing
 */

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
// Connect stuff and injecting them to components so we can use them as props
