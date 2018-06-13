import React from 'react';
import PropTypes from 'prop-types'
import currency from "../../availableCurrencies";
import {connect} from "react-redux";


const TranslatedCurrency = (props) => {
	const value = props.children;
	const currentCurrency = props.currentCurrency;

	return (
		<div>
			{Math.ceil(value / currency[currentCurrency])} {currentCurrency}
		</div>
	);
};



export default connect(({currency}) => {
	return {currentCurrency: currency}
})(TranslatedCurrency);