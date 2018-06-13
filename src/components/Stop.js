import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StopsList from "./StopsList";

class Stop extends Component {
	render() {
		return (
			<div>
				<h6>КОЛИЧЕСТВО ПЕРЕСАДОК</h6>
				<StopsList/>
			</div>
		);
	}
}

Stop.propTypes = {};

export default Stop;
