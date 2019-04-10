/**
 *  @license
 *  Copyright 2018
 *  @author
 *  fei. zhang
 *  @time
 *  2019-04-08 18:17
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../containers/home/home';
import About from '../../containers/about/about';
import SliderMenu from '../menu';
import './route.less';

////////////////////////////////////////////////////////////
// then our route config
const routes = [
	{
		path: "/",
		component: Home
	},
	{
		path: "/about",
		component: About,
		// routes: [
		// 	{
		// 		path: "/tacos/bus",
		// 		component: Bus
		// 	},
		// 	{
		// 		path: "/tacos/cart",
		// 		component: Cart
		// 	}
		// ]
	}
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
	return (
		<Route
			path={route.path}
			render={props => (
				// pass the sub-routes down to keep nesting
				<route.component {...props} routes={route.routes} />
			)}
		/>
	);
}

function RouteConfig() {
	return (
		<Router>
			<div className='app-container'>
				<div className='left'>
					<SliderMenu />
				</div>
				<div className='right'>
					{routes.map((route, i) => (
						<RouteWithSubRoutes key={i} {...route} />
					))}
				</div>

			</div>
		</Router>
	);
}

export default RouteConfig;