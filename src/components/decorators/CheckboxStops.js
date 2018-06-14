import React, {Component} from 'react';

export default (OriginalComponent) => class CheckboxStops extends Component {
	render() {
		return (
			<div>
				<OriginalComponent {...this.props}/>
			</div>
		);
	}
}