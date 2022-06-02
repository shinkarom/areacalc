import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';

function Result(props) {
	return (
		<div>
			<p>The area of the rectangle is {props.area}.</p>
		</div>
	);
}

class App extends Component {
	constructor(props){
		super(props);
		this.state={width: 10, height:10}
		this.onWidthChange = this.onWidthChange.bind(this);
		this.onHeightChange = this.onHeightChange.bind(this);
		}
	
	onWidthChange(e){
		this.setState({width: e.target.value});
	}
	
	onHeightChange(e){
		this.setState({height: e.target.value});
	}
	
	getArea(){
		return this.state.width * this.state.height;
		}
	
  render() {
    return (
      <div className="App">
        <Input label="Width" value={this.state.width} onChange={this.onWidthChange}/>
        <Input label="Height" value={this.state.height} onChange={this.onHeightChange} />
		<Result area={this.getArea()} />
      </div>
    );
  }
}

export default App;
