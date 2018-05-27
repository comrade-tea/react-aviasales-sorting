import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Ticket extends Component {
	render() {
		const {ticket} = this.props

		return (
			<div className="card-ticket">
				<div className="card-ticket__leftbar">
					<button className='btn-warning'>Купить за {ticket.price}</button>
				</div>
				<div className="card-ticket__rightbar">
					<div className="ct-details">
						<div className="ct-details__departure">
							<div className="flight">
								<div className="flight__time">{ticket.departure_time}</div>
								<div className="flight__city">{ticket.origin}, {ticket.origin_name}</div>
								<div className="flight__date">{ticket.departure_date}</div>
							</div>
						</div>
						<div className="ct-details__stops">
							<div className="flight-figure">
								<div className="flight-figure__title">Пересадки: {ticket.stops}</div>
								<div className="flight-figure__line"></div>
								<div className="flight-figure__aircraft"></div>
							</div>
						</div>
						<div className="ct-details__arrival">
							<div className="flight">
								<div className="flight__time">{ticket.arrival_time}</div>
								<div className="flight__city">{ticket.destination}, {ticket.destination_name}</div>
								<div className="flight__date">{ticket.arrival_date}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Ticket.propTypes = {};

export default Ticket;