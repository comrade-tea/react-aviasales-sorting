import React, {Component} from 'react';
import logo from '../img/logo.png';
import './App.scss';
import Leftbar from "./Leftbar";
import TicketsList from "./TicketsList";
import data from '../tickets'


class App extends Component {
	constructor(props) {
		super(props)

		const tickets = data.tickets.map((item, index) => {
			return {...item, id: index}
		})

		this.state = {tickets}
	}
	/*state = {
		tickets: data.tickets.map()
	}*/

	render() {

		return (
			<div className="App">
				<div className="container-md">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo"/>
					</header>

					<div className="row">
						<div className="col-md-4">
							<Leftbar/>
						</div>
						<div className="col-md-8">
							<TicketsList tickets={this.state.tickets}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
