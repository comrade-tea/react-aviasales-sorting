import {combineReducers} from 'redux'
import currency from '../ducks/currency'
import tickets from "../ducks/tickets";
import stops from "../ducks/stops";


export default combineReducers({
	currency, tickets, stops
})