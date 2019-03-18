import PropTypes from 'prop-types';
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
	Responsive,
	Visibility,
	Segment,
	Menu,
	Button,
	Container,
} from 'semantic-ui-react';
import HomePageHeading from './HomePageHeading';

class DesktopContainer extends Component {
	state = {};

	hideFixedMenu = () => this.setState({ fixed: false });
	showFixedMenu = () => this.setState({ fixed: true });

	render () {
		const { children } = this.props;
		const { fixed } = this.state;

		return (
			<Responsive minWidth={Responsive.onlyTablet.minWidth}>
				<Visibility
					once={false}
					onBottomPassed={this.showFixedMenu}
					onBottomPassedReverse={this.hideFixedMenu}>
					<Segment
						inverted
						textAlign='center'
						style={{ minHeight: 700, padding: '1em 0em' }}
						vertical>
						<Menu
							fixed={fixed ? 'top' : null}
							inverted={!fixed}
							pointing={!fixed}
							secondary={!fixed}
							size='large'>
							<Container>
								<Menu.Item active>
									<a href='/'>Home</a>
								</Menu.Item>
								<Menu.Item position='right'>
									<Button animated='fade' inverted={!fixed}>
										<Button.Content visible>
											Log in
										</Button.Content>
										<Button.Content hidden>
											Soon
										</Button.Content>
									</Button>
									<Button
										animated='fade'
										primary={fixed}
										inverted={!fixed}
										style={{ marginLeft: '0.5em' }}>
										<Button.Content visible>
											Sign Up
										</Button.Content>
										<Button.Content hidden>
											Soon
										</Button.Content>
									</Button>
								</Menu.Item>
							</Container>
						</Menu>
						<HomePageHeading />
					</Segment>
				</Visibility>
			</Responsive>
		);
	}
}

DesktopContainer.propTypes = {
	children : PropTypes.node,
};

export default DesktopContainer;
