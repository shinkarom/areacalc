import React, {Component} from 'react';

class Input extends React.Component {
	constructor(props){
		super(props);
	}
	
	render() {
	return (
		<div>
		<span>{this.props.label}: </span>
		<input type="number" min={1} max={100} value={this.props.value}
			onChange={this.props.onChange}/>
		</div>
	);
	}
}

export default Input;