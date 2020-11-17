import { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Skill from './Skill';

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
			<Container fluid id="home">
				<Row>
					<h2 className = "title">
						Who Am I?
					</h2>
				</Row>
				<Row>
					<Col xs = {12} sm = {12} md = {6} lg = {6}>
						<Card>
							<Card.Img variant = "top" src = "https://via.placeholder.com/300" />
							<Card.Body>
								<Card.Title>
									Tyler Arseneault
								</Card.Title>
								<Card.Text>
									I am a Software Developer located in Edmonton, Alberta, Canada. In 2018, I graduated from MacEwan University with a B.Sc. majoring in Computer Science,
									with a minor in Business Studies. Growing up, I've always had a passion and curiosity for technology. I enjoyed taking apart and rebuilding computers, just so
									that I could see how they worked, and to challenge myself to put it back together. As I got older, I realized that I had a particular knack and enjoyment
									for problem solving. It eventually led to a realization that Computer Science and Software Development was the right path for me to take.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col xs = {12} sm = {12} md = {6} lg = {6}>
						<Row className = "skill-row">
							<Col>
								<Row>
									<Col>
										<h3 className = "subtitle">
											Skill
										</h3>
									</Col>	
								</Row>
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
						<Row>
							<Col>
								<Row>
									<Col>
										<h3 className = "subtitle">
											Programming Languages
										</h3>
									</Col>	
								</Row>
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
