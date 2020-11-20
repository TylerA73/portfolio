import { Component } from 'react';
import { Card } from 'react-bootstrap';
/**
 * Name: Project
 * Description: Handles the functionality and layout of each project
 */

export default class Project extends Component {
	constructor(props) {
		super(props);

		this.getTechnologies = this.getTechnologies.bind(this);
	}

	getTechnologies() {
		let techList = "";
		if (this.props.project.technologies) {
			this.props.project.technologies.forEach((tech, i) => {
				if (i == this.props.project.technologies.length - 1) {
					techList += tech;
				} else {
					techList += `${tech}, `
				}
			})
		}

		return techList;
	}

	render() {
		return (
			<div className = "project">
				<Card className = "project bg-dark white-text" >
	  				<Card.Body>
						<Card.Title>{this.props.project.title}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">{ this.getTechnologies() }</Card.Subtitle>
						<Card.Text>
							{this.props.project.description}
						</Card.Text>
						<Card.Link href={this.props.project.repo ? this.props.project.repo : "#"} target = "_blank">Repo</Card.Link>
	  				</Card.Body>
				</Card>
			</div>
		);
	}
}
