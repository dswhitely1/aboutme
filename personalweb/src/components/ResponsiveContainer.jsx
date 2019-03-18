import PropTypes from 'prop-types';
import React from 'react';
import DesktopContainer from './header/DesktopContainer';
import MobileContainer from './header/MobileContainer';
import AboutMe from './body/AboutMe';
import Footer from './footer/Footer';

const ResponsiveContainer = ({ children }) => (
	<div>
		<DesktopContainer>{children}</DesktopContainer>
		<MobileContainer>{children}</MobileContainer>
		<AboutMe />
		<Footer />
	</div>
);

ResponsiveContainer.propTypes = {
	children : PropTypes.node,
};

export default ResponsiveContainer;
