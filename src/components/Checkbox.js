import React, {Component} from 'react';
import {connect} from "react-redux";
import {addStop, removeStop} from "../ducks/stops";


class Checkbox extends Component {
	// завязать state на props
	static state = {
		checked: false
	}

	/*componentWillReceiveProps() {
		this.setState({checked: this.props.checked})
	}*/

	render() {
		// const {value, text} = this.props;
		const {info} = this.props;
		// console.log("----", info)

		return (
			<div className="pretty p-icon p-curve p-smooth">
				<input onClick={this.handleChange(info.value)} checked={this.state.checked} type="checkbox"/>
				<div className="state p-primary-o">
					<i className="icon mdi mdi-check"></i>
					<label className='ml-2'> {info.text}</label>
				</div>
			</div>
		);
	}

	handleChange = (value) => (ev) => {
		console.log("----", value, ev)
		// console.log("----", ev.target)

		ev.nativeEvent.preventDefault()
		const {addStop, removeStop} = this.props;


		/*if (value === 'all') {

		}*/

		addStop(value);
	}
}


export default connect(null, {addStop, removeStop})(Checkbox);
