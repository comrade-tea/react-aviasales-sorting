import {Map, Record} from "immutable";

const ADD_ALL = 'ADD_ALL'
const REMOVE_ALL = 'REMOVE_ALL'
const ADD_STOP = 'ADD_STOPS'
const REMOVE_STOP = 'REMOVE_STOPS'

// const defaultState = List();
const stops = [
	/*{value: "all", checked: true, text: "Все"},*/
	{value: 0, checked: true, text: "без пересадок"},
	{value: 1, checked: true, text: "1 пересадка"},
	{value: 2, checked: true, text: "2 пересадки"},
	{value: 3, checked: true, text: "3 пересадки"}
]
const StopRecord = new Record({
	value: null,
	checked: false,
	text: null,
})

const defaultState = stops.reduce((acc, item) => {
	return acc.set(item.value, StopRecord(item))
}, new Map())

export default function reducer(state = defaultState, action) {
	const {type, payload} = action
	// console.log("----", payload)

	switch (type) {
		case ADD_STOP:
			return state.setIn([payload.id, 'checked'], true)
		case REMOVE_STOP:
			return state.setIn([payload.id, 'checked'], false)
		// ---
		case ADD_ALL:
			const newState = state.map((item, b) => {
				// console.log("----", item);
				return item.set('checked', true)
			})

			/*console.log("----", newState);
			window.lol = newState;*/

			return newState

		default:
			return state
	}
};

export function addStop(id) {
	return {
		type: ADD_STOP,
		payload: {id}
	}
}

export function removeStop(id) {
	return {
		type: REMOVE_STOP,
		payload: {id}
	}
}

export function addAllStops() {
	return {
		type: ADD_ALL,
	}
}
export function removeAllStops() {
	return {
		type: REMOVE_ALL,
	}
}