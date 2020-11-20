import { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import linkedin from "../resources/linkedin.png";
import github from "../resources/github.png";

export default class Footer extends Component {
	render() {
		return (
			<Navbar className = "navigation" fixed = "bottom" bg = "dark" variant = "dark" expand = "lg">
				<Navbar.Brand href = "https://github.com/TylerA73/" target = "_blank" className = "navigation">
					<img src = {github} width = "30" height = "30"/>
				</Navbar.Brand>
				<Navbar.Brand href = "https://www.linkedin.com/in/tyler-arseneault-9b2a3873/" target = "_blank" className = "navigation">
					<img src = {linkedin} width = "30" height = "30"/>
				</Navbar.Brand>

			</Navbar>
		);
	}
}
