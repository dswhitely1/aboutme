import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Grid, Header, Image } from 'semantic-ui-react';
import MyPicture from '../../imgs/MyPicture.png';

const AboutMe = () => {
	return (
		<Segment style={{ padding: '8em 0em' }} vertical>
			<Grid container stackable verticalAlign='middle'>
				<Grid.Row>
					<Grid.Column width={8}>
						<Header as='h3' style={{ fontSize: '2em' }}>
							It's time for a change
						</Header>
						<p style={{ fontSize: '1.33em' }}>
							After being interested in computers and technology
							since the days of DOS 6.22 and Windows 3.1, I have
							finally decided that it's time to pursue a career in
							Information Technology. My goal is to become a Full
							Stack Web Developer and put my skills and expertise
							to use.
						</p>
					</Grid.Column>
					<Grid.Column floated='right' width={6}>
						<Image
							verticalAlign='middle'
							size='large'
							src={MyPicture}
							style={{
								paddingTop : '3em',
								margin     : '0px auto',
							}}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default AboutMe;
