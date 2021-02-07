import React, { useEffect } from 'react';
import { Route as ReactDOMRoute, withRouter, useLocation } from 'react-router-dom';

function _ScrollToTop(props) {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export const Route = (props) => {
	return (
		<ReactDOMRoute
			render={({ location }) => {
				return (
					<ScrollToTop>
						<props.component />
					</ScrollToTop>
				);
			}}
		/>
	);
};
