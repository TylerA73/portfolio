import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation';
import About from './About';
import Projects from './Projects';
import data from '../data/data.json';

/**
 * Name: Main
 * Desciption: Handles the main layout of the entire page
 */
export default class Main extends Component {

	render() {
		return (
			<div>
				<Navigation />
				<Container fluid>
					<About skills = { data.skills } languages = { data.languages }/>
					<Projects />
				</Container>
			</div>
		);
	}

}
