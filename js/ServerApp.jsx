// // @flow

// import React from 'react';
// import { StaticRouter } from 'react-router-dom';
// import App from './App';

// import routes from './rrv4/routes';
// import { ensureReady, convertCustomRouteConfig } from './rrv4/rrv4Helpers';

// const routeConfig = convertCustomRouteConfig(routes);

// export default function serverRender(location: string) {
// 	return ensureReady(routeConfig, location).then(() => (
// 		<StaticRouter context={{}} location={location}>
// 			<App />
// 		</StaticRouter>
// 	));
// }
