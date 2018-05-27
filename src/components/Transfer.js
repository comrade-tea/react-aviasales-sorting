import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TransferList from "./TransferList";

class Transfer extends Component {
	render() {
		return (
			<div>
				<h6>КОЛИЧЕСТВО ПЕРЕСАДОК</h6>
				<TransferList/>
			</div>
		);
	}
}

Transfer.propTypes = {};

export default Transfer;
