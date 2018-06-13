import {Map, Record} from "immutable";

const ADD_ALL = 'ADD_ALL'
const REMOVE_ALL = 'REMOVE_ALL'
const ADD_STOP = 'ADD_STOPS'
const REMOVE_STOP = 'REMOVE_STOPS'

// const defaultState = List();
const stops = [
	{value: 0, checked: false, text: "без пересадок"},
	{value: 1, checked: false, text: "1 пересадка"},
	{value: 2, checked: false, text: "2 пересадки"},
	{value: 3, checked: false, text: "3 пересадки"}
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
			// console.log("----", state.get(payload.id))
			return state.setIn([payload.id, 'checked'], true)
			// return state

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