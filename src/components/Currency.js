import React, {Component} from 'react';
// import {} from 'bootstrap/dist/js/bootstrap.bundle'
import PropTypes from 'prop-types';

class Currency extends Component {
	render() {
		const currency = [{id: 0, value: "RUB"}, {id: 1,value: "USD"}, {id: 2, value: "EUR"}];
		const buttonList = currency.map(item => {
			return <button className="btn btn-outline-primary" key={item.id} onClick={this.handleChangeCurrency(item.value)}>{item.value}</button>
		})

		console.log("----", buttonList)

		return (
			<div>
				<h6>ВАЛЮТА</h6>
				<div className="btn-group btn-group-toggle">
					{buttonList}
				</div>
			</div>
		);
	}

	handleChangeCurrency = (value) => (ev) => {
		console.log("----", value);
	}
}

Currency.propTypes = {};

export default Currency;
