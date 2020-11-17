import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * Name: Projects
 * Description: Handles the projects section of the page
 */
export default class Projects extends Component {

	render() {
		return(
			<Container fluid id="projects">
				<Row>
					<h2 className = "title">
						Projects
					</h2>
				</Row>
			</Container>
		);
	}

}
