import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Currency from "./Currency";
import Stop from "./Stop";

class Leftbar extends Component {
	render() {
		return (
			<div className='leftbar'>
				<div className="leftbar__block">
					<Currency/>
				</div>
				<div className="leftbar__block">
					<Stop/>
				</div>
			</div>
		);
	}
}

Leftbar.propTypes = {};

export default Leftbar;
