import React from 'react';
import {
	Segment,
	Grid,
	Header,
	List,
	Icon,
	Button,
	Divider,
} from 'semantic-ui-react';
const Footer = () => {
	return (
		<Segment
			inverted
			vertical
			style={{ padding: '5em 5em', margin: '0 auto' }}>
			<Grid divided inverted stackable>
				<Grid.Row>
					<Grid.Column width={4}>
						<Header
							inverted
							as='h4'
							textAlign='center'
							content='Contact'
						/>
						<List link inverted>
							<a href='mailto:dswhitely1@gmail.com'>
								<Button fluid primary>
									<Icon name='mail' />Email me
								</Button>
							</a>
						</List>
					</Grid.Column>
					<Grid.Column width={4}>
						<Header
							inverted
							as='h4'
							textAlign='center'
							content='Social Media'
						/>
						<List link inverted>
							<List.Item>
								<Button.Group fluid vertical>
									<a href='https://www.facebook.com/thedonrocks'>
										<Button color='facebook'>
											<Icon name='facebook' />Facebook
										</Button>
									</a>
									<a href='https://twitter.com/TheDonRockz'>
										<Button color='twitter'>
											<Icon name='twitter' />Twitter
										</Button>
									</a>
									<a href='https://www.linkedin.com/in/donald-whitely-b2345415b/'>
										<Button color='linkedin'>
											<Icon name='linkedin' />Linkedin
										</Button>
									</a>
								</Button.Group>
							</List.Item>
						</List>
					</Grid.Column>
					<Grid.Column width={8}>
						<Divider
							as='h4'
							className='header'
							horizontal
							inverted
							style={{
								marginTop     : '0.5em',
								marginBottom  : '2em',
								textTransform : 'uppercase',
							}}>
							Quote of the Day
						</Divider>

						{/* <Header as='h4' inverted>
							Quote of the day
						</Header> */}
						<p>
							I tell my kids and I tell proteges, always have
							humility when you create and grace when you succeed,
							because it's not about you. You are a terminal for a
							higher power. As soon as you accept that, you can do
							it forever.
						</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default Footer;
