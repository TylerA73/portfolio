import { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

export default class Skill extends Component {
	render() {
		return (
			<div className = "skill">
				<label>{this.props.skill.name}</label><ProgressBar now = {this.props.skill.level} />
			</div>
		);
	}
}
