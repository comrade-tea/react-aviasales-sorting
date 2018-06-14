import React, {Component} from 'react';
import Checkbox from "./Checkbox";
import {connect} from "react-redux";
import {addAllStops, removeAllStops} from "../ducks/stops";


class StopsList extends Component {
	state = {
		allCheckbox: true
	}

	componentWillMount() {

	}

	/*componentWillReceiveProps() {
		if (this.state.allCheckbox) {
			console.log("----", "давай включим все!")
			this.props.addAllStops();
		}
		else {
			console.log("----", "хохо, давай всё выключим!")
			this.props.removeAllStops();
		}
	}*/

	render() {
		const {stops} = this.props;
		const checkboxList = stops.map(item => <li key={item.value} className='transfer-list__item'><Checkbox info={item}/></li>)

		
		return (
			<div>
				<ul className='transfer-list'>
					<div className="pretty p-icon p-curve p-smooth">
						<input onChange={this.handleAll} checked={this.state.allCheckbox} type="checkbox"/>
						<div className="state p-primary-o">
							<i className="icon mdi mdi-check"></i>
							<label className='ml-2'> Все..</label>
						</div>
					</div>

					{checkboxList}
				</ul>
			</div>
		);
	}

	handleAll = () => {
		const {stops, addAllStops, removeAllStops} = this.props
		const {allCheckbox} = this.state

		// just toggle
		this.setState({allCheckbox: !allCheckbox})
		

		const hasActive = stops.find((el) => {
			// console.log("----", el.checked)
			return el.checked
		})

		if (hasActive) {
			
		}

		console.log("--checkboxes has active?--", hasActive)
	}
}

export default connect(({stops}) => {
	return {stops: stops.toArray()}
}, {addAllStops, removeAllStops})(StopsList);
