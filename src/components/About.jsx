import { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import Skill from './Skill';
import logo from './pixelme.jpg';

/**
 * Name: About
 * Description: Handles the about me section of the page
 */
export default class About extends Component {
	constructor(props) {
		super();

		this.getSkills = this.getSkills.bind(this);
		this.getLanguages = this.getLanguages.bind(this);
	}

	getSkills() {
		if (this.props && this.props.skills && Array.isArray(this.props.skills)) {
			return this.props.skills.map((skill, index) => {
				return (
					<Skill skill = {skill} id = {`skill-${index}`}/>
				);
			});
		} else {
			return;
		}
	}

	getLanguages() {
		if (this.props && this.props.languages && Array.isArray(this.props.languages)) {
			return this.props.languages.map((language, index) => {
				return (
					<Skill skill = {language} id = {`language-${index}`}/>
				);
			});
		} else {
			return;
		}
	}

	render() {
		return(
			<Container fluid id = "home">
				<Row className = "about">
					<div className = "about" id = "about">
						<Row>
							<Col className = "about-col">
								<Image rounded className = "logo" src = {logo} />
							</Col>
						</Row>
						<Row>
							<Col>
								<h4>Tyler Arseneault</h4>
							</Col>
						</Row>
						<Row>
							<Col>
								Software Developer in Edmonton, Alberta, Canada
							</Col>
						</Row>
					</div>
				</Row>
				<Row className = "about">
					<Col xs = {12} sm = {12} md = {6} lg = {6} className = "about-col">
						About me content
					</Col>
					<Col xs = {12} sm = {12} md = {6} lg = {6} className = "about-col">
						More about me content	
					</Col>
				</Row>
				<Row className = "skills-row">
					<Col xs = {12} sm = {12} md = {6} lg = {6}>
						<Row className = "skill-row">
							<Col>
								<Row>
									<Col>
										{this.getSkills().map((skill, index) => {
											return (
												<Fragment key = {`skill-fragment-${index}`}>
													{skill}
												</Fragment>
											);
										})}
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
					<Col xs = {12} sm = {12} md = {6} lg = {6}>
						<Row>
							<Col>
								<Row>
									<Col>
										{this.getLanguages().map((language, index) => {
											return (
												<Fragment key = {`language-fragment-${index}`}>
													{language}
												</Fragment>
											);
										})}
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		);
	}

}
