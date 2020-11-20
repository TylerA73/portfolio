import { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from './Project';

/**
 * Name: Projects
 * Description: Handles the projects section of the page
 */
export default class Projects extends Component {

	constructor(props) {
		super(props);

		this.displayProjects = this.displayProjects.bind(this);
		this.getProjects = this.getProjects.bind(this);
	}

	displayProjects() {
		let projRows = [];
		let projects = this.getProjects();

		for (let i = 0; i < projects.length; i+=3) {
			projRows.push(<Row className = "project-row">{projects[i]}{projects[i+1]}{projects[i+2]}</Row>);
		}

		return projRows;
	}

	getProjects() {
		if (this.props.projects && Array.isArray(this.props.projects)) {
			return this.props.projects.map((project, index) => {
				return (
					<Col xs = {12} sm = {12} md = {4} lg = {4}>
						<Project project = {project} />
					</Col>
				);
			})
		}
	}

	render() {
		return(
			<Container fluid id = "projects" className = "projects">
				{this.displayProjects().map((project, index) => {
					return (
						<Fragment key = {`project-${index}`}>
							{project}
						</Fragment>
					);
				})}
			</Container>
		);
	}

}
