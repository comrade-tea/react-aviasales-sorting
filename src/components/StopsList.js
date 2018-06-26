import React, {Component} from 'react';
import Checkbox from "./Checkbox";
import {connect} from "react-redux";
import {addAllStops, removeAllStops, removeAllExcept} from "../ducks/stops";


class StopsList extends Component {
	state = {
		allCheckbox: true
	}

	componentWillReceiveProps(nextProps) {
		const {stops} = nextProps;
		const isAllChecked = stops.every(item => item.checked);

		if (isAllChecked)
			this.setState({allCheckbox: true})
		else
			this.setState({allCheckbox: false})
	}


	render() {
		const {stops} = this.props;

		const checkboxList = stops.map(item => (
				<li key={item.value} className='transfer-list__item'>
					<Checkbox info={item}/>
					<button onClick={() => this.handleRemoveAllExcept(item.value)}
					        className="transfer-list__only"
					        type='button'>
						Только
					</button>
				</li>
			)
		)


		return (
			<div>
				<ul className='transfer-list'>
					<li className='transfer-list__item'>
						<div className="pretty p-icon p-curve p-smooth">
							<input onChange={this.handleAll} checked={this.state.allCheckbox} type="checkbox"/>
							<div className="state p-primary-o">
								<i className="icon mdi mdi-check"></i>
								<label className='ml-2'> Все..</label>
							</div>
						</div>
					</li>

					{checkboxList}
				</ul>
			</div>
		);
	}

	handleAll = () => {
		const {addAllStops, removeAllStops} = this.props
		const {allCheckbox} = this.state

		// just toggle
		this.setState({allCheckbox: !allCheckbox})

		if (allCheckbox) {
			// console.log("----", "вырубить все")
			removeAllStops()
		}
		else {
			// console.log("----", "врубить все")
			addAllStops()
		}
	}

	handleRemoveAllExcept = (id) => {
		const {removeAllExcept} = this.props

		removeAllExcept(id);
	}
}

export default connect(({stops}) => {
	return {stops: stops.toArray()}
}, {addAllStops, removeAllStops, removeAllExcept})(StopsList);
