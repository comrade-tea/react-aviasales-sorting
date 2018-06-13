import React, {Component} from 'react';
import logo from '../img/logo.png';
import './App.scss';
import Leftbar from "./Leftbar";
import TicketsList from "./TicketsList";
import {Provider} from "react-redux";
import store from "../redux/index";


class App extends Component {
	render() {

		return (
			<Provider store={store}>
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
								<TicketsList/>
							</div>
						</div>
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
