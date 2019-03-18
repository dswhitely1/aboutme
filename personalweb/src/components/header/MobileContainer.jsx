import PropTypes from 'prop-types';
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
	Responsive,
	Sidebar,
	Menu,
	Segment,
	Container,
	Button,
	Icon,
} from 'semantic-ui-react';
import HomePageHeading from './HomePageHeading';

class MobileContainer extends Component {
	state = {};

	handlePusherClick = () => {
		const { sidebarOpened } = this.state;

		if (sidebarOpened) this.setState({ sidebarOpened: false });
	};
	handleToggle = () =>
		this.setState({ sidebarOpened: !this.state.sidebarOpened });

	render () {
		const { children } = this.props;
		const { sidebarOpened } = this.state;

		return (
			<Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
				<Sidebar.Pushable>
					<Sidebar
						as={Menu}
						animation='uncover'
						inverted
						vertical
						visible={sidebarOpened}>
						<a href='/'>
							<Menu.Item active>Home</Menu.Item>
						</a>
						<Menu.Item as='a'>Log in</Menu.Item>
						<Menu.Item as='a'>Sign Up</Menu.Item>
					</Sidebar>
					<Sidebar.Pusher
						dimmed={sidebarOpened}
						onClick={this.handlePusherClick}
						style={{ minHeight: '10vh' }}>
						<Segment
							inverted
							textAlign='center'
							style={{ minHeight: 350, padding: '1em 0em' }}
							vertical>
							<Container>
								<Menu inverted pointing secondary size='large'>
									<Menu.Item onClick={this.handleToggle}>
										<Icon name='sidebar' />
									</Menu.Item>
									<Menu.Item position='right'>
										<Button animated='fade' inverted>
											<Button.Content visible>
												Log in
											</Button.Content>
											<Button.Content hidden>
												Soon
											</Button.Content>
										</Button>
										<Button
											animated='fade'
											inverted
											style={{ marginLeft: '0.5em' }}>
											<Button.Content visible>
												Sign Up
											</Button.Content>
											<Button.Content hidden>
												Soon
											</Button.Content>
										</Button>
									</Menu.Item>
								</Menu>
							</Container>
							<HomePageHeading mobile />
						</Segment>
						{children}
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</Responsive>
		);
	}
}

MobileContainer.propTypes = {
	children : PropTypes.node,
};

export default MobileContainer;
