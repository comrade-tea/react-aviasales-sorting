import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Ticket from "./Ticket";
import {connect} from "react-redux";


class TicketsList extends Component {
	render()  {
		const {tickets} = this.props
		// console.log("----", this.props)
		// console.log("---", tickets[0])

		const ticketsList = tickets.map(item => {
			return <li className='ticket-list__item' key={item.id}><Ticket ticket={item}/></li>
		})

		return (
			<ul className='ticket-list'>
				{ticketsList}
			</ul>
		);
	}
}

TicketsList.propTypes = {};

export default connect(({tickets, currency}) => {
	// TODO: фильтрация билетов
	const filteredTickets = tickets.filter(ticket => {
		return true
	})

	return {
		tickets: filteredTickets
	}
})(TicketsList);
