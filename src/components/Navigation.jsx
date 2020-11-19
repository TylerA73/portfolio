import { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

/**
 * Name: Navigation
 * Description:	A navigation bar designed for users to quickly navigate through the page.
 */
export default class Navigation extends Component {
	render() {
		return (
			<Navbar className = "navigation" sticky = "top" bg = "dark" variant = "dark" expand = "lg">
				<Navbar.Brand href = "#home" className = "navigation">Tyler Arseneault</Navbar.Brand>
				<Navbar.Toggle aria-controls = "navbar-nav navigation" />
				<Navbar.Collapse id = "navbar-nav" className = "navigation">
					<Navbar.Text className = "navigation">
						Software Developer
					</Navbar.Text>
					<Nav className = "ml-auto navigation">
						<Nav.Link href = "#home">Home</Nav.Link>
						<Nav.Link href = "#projects">Projects</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
