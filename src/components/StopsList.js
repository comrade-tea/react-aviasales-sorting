import React, {Component} from 'react';
import Checkbox from "./Checkbox";
import {connect} from "react-redux";


class StopsList extends Component {

	render() {
		const {stops} = this.props;
		const checkboxList = stops.map(item => <li key={item.value} className='transfer-list__item'><Checkbox info={item}/></li>)

		return (
			<div>
				<ul className='transfer-list'>
					{/*<li className='transfer-list__item'><Checkbox value='all' text={"Все"}/></li>*/}
					{checkboxList}
					{/*<li className='transfer-list__item'><Checkbox value='0' text={"Без пересадок"}/></li>
					<li className='transfer-list__item'><Checkbox value='1' text={"1 пересадка"}/></li>
					<li className='transfer-list__item'><Checkbox value='2' text={"2 пересадки"}/></li>
					<li className='transfer-list__item'><Checkbox value='3' text={"3 пересадки"}/></li>*/}
				</ul>
			</div>
		);
	}

	handleAll = () => {

	}
}

export default connect(({stops}) => {
	// console.log("----", stops.toArray());
	return {stops: stops.toArray()}
})(StopsList);
