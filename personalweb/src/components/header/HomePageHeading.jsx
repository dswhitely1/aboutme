import PropTypes from 'prop-types';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Button, Icon } from 'semantic-ui-react';

const HomePageHeading = ({ mobile }) => (
	<Container text style={{ marginBottom: '10px' }}>
		<Header
			as='h1'
			content='Donald Scott Whitely'
			inverted
			style={{
				fontSize     : mobile ? '2em' : '4em',
				fontWeight   : 'normal',
				marginBottom : 0,
				marginTop    : mobile ? '1.5em' : '3em',
			}}
		/>
		<Header
			as='h2'
			content='Future Full Stack Web Developer'
			inverted
			style={{
				fontSize   : mobile ? '1.5em' : '1.7em',
				fontWeight : 'normal',
				marginTop  : mobile ? '0.5em' : '1.5em',
			}}
		/>
		<a href='mailto:dswhitely1@gmail.com'>
			<Button primary size='huge'>
				Contact me<Icon name='right arrow' />
			</Button>
		</a>
	</Container>
);

HomePageHeading.propTypes = {
	mobile : PropTypes.bool,
};

export default HomePageHeading;
