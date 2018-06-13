import React, {Component} from 'react';
import {connect} from "react-redux";
import {changeCurrency} from "../ducks/currency";

import PropTypes from 'prop-types';

class Currency extends Component {
	render() {
		const currency = [{id: 0, value: "RUB"}, {id: 1, value: "USD"}, {id: 2, value: "EUR"}];
		const buttonList = currency.map(item => {
			return (
				<button className={this.setButtonStyles(item.value)} key={item.id}
				        onClick={this.handleChangeCurrency(item.value)}>
					{item.value}
				</button>)
		})

		return (
			<div>
				<h5>ВАЛЮТА</h5>
				<div className="btn-group btn-group-fluid btn-group-toggle">
					{buttonList}
				</div>
			</div>
		);
	}

	setButtonStyles = (value) => {
		const {currency} = this.props;
		let cssClasses = "btn ";

		if (currency === value) {
			cssClasses += 'btn-primary'
		}
		else {
			cssClasses += 'btn-outline-primary';
		}

		return cssClasses;
	}

	handleChangeCurrency = (value) => (ev) => {
		const {currency, changeCurrency} = this.props;

		changeCurrency(value);
	}
}

Currency.propTypes = {};

export default connect((state) => {
	return {currency: state.currency}
}, {changeCurrency})(Currency);