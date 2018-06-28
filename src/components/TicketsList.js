import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Ticket from "./Ticket";
import {connect} from "react-redux";
import {List} from "immutable";


class TicketsList extends Component {
	render() {
		return (
			<ul className='ticket-list'>
				{this.getTicketList()}
			</ul>
		);
	}

	getTicketList() {
		const {tickets} = this.props

		if (tickets.length) {
			return tickets.map(item => {
				return <li className='ticket-list__item' key={item.id}><Ticket ticket={item}/></li>
			})
		}
		else {
			return (<li>
				<div className='card'>
					<div className='card-body'>
						<em>No tickets available! Change the filter settings</em>
					</div>
				</div>
			</li>)
		}
	}
}

TicketsList.propTypes = {};

export default connect(({tickets, stops}) => {

	const stopsArr = stops.toArray();
	const stopsFilter = stopsArr.reduce((acc, item) => {
		return item.checked ? acc.concat(item.value) : acc
	}, []);

	const filteredTickets = tickets.filter(ticket => {
		if (stopsFilter.includes(ticket.stops))
			return true

		return false;
	})

	return {
		tickets: filteredTickets,
		stops
	}
})(TicketsList);
