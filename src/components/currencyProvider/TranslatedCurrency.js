import React from 'react';
import PropTypes from 'prop-types'
import currency from "../../availableCurrencies";
import {connect} from "react-redux";


const TranslatedCurrency = (props) => {
	const value = props.children;
	const currentCurrency = props.currentCurrency;

	return (
		<span>
			{Math.ceil(value / currency[currentCurrency])} {currentCurrency}
		</span>
	);
};



export default connect(({currency}) => {
	return {currentCurrency: currency}
})(TranslatedCurrency);