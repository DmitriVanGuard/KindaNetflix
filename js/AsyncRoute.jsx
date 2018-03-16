// @flow

import React, { Component } from 'react';
import Spinner from './Spinner';

type Props = {
	componentProps: mixed,
	loadingPromise: Promise<{ default: Class<React.Component<*, *, *>> }> // in < > defining what Promise will return
	// default property will contain React component
};
type State = {
	loaded: boolean
};

class AsyncRoute extends Component<Props, State> {
	state = {
		loaded: false
	};

	componentDidMount() {
		// As soon AsyncRoute did mount, we will be action upon Promise we gonna get from props
		this.props.loadingPromise.then(module => {
			// When promise resolves, it will get `module` from webpack
			this.component = module.default;
			this.setState({ loaded: true });
		});
	}

	component = null; // It's better then sticking recieved component to AsyncRoute state, because on every render React will check state and the component is a big object -> performance issues. Keeping it inside class => React will not check it, it will be loaded once and there is no need to force an rerender

	render() {
		if (this.state.loaded) {
			// this === AsyncRoute
			// $FlowFixMe
			return <this.component {...this.props.componentProps} />;
		}
		return <Spinner />;
	}
}
export default AsyncRoute;
