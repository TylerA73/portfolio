import { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

export default class Skill extends Component {
	render() {
		return (
			<div className = "skill">
				<ProgressBar now = {this.props.skill.level} label = {this.props.skill.name} />
			</div>
		);
	}
}
