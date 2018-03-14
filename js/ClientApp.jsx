import React from 'react';
import { render } from 'react-dom';

const MyFirstComponent = function() {
	return React.createElement('div', null, "It's my first React component!");
};
render(React.createElement(MyFirstComponent), document.getElementById('app'));
