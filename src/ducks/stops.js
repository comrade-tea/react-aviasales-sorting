import {Map, Record} from "immutable";

const ADD_ALL = 'ADD_ALL'
const REMOVE_ALL = 'REMOVE_ALL'
const ADD_STOP = 'ADD_STOPS'
const REMOVE_STOP = 'REMOVE_STOPS'
const REMOVE_ALL_EXCEPT = 'REMOVE_ALL_EXCEPT'

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

	switch (type) {
		case ADD_STOP:
			return state.setIn([payload.id, 'checked'], true)
		case REMOVE_STOP:
			return state.setIn([payload.id, 'checked'], false)
		case ADD_ALL:
			return state.map((item, b) => {
				return item.set('checked', true)
			})
		case REMOVE_ALL:
			return state.map(item => {
				return item.set('checked', false);
			});
		case REMOVE_ALL_EXCEPT:
			return state.map(item => {
				return item.value === payload.id ? item.set('checked', true) : item.set('checked', false)
			})

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
		type: ADD_ALL
	}
}

export function removeAllStops() {
	return {
		type: REMOVE_ALL
	}
}

export function removeAllExcept(id) {
	return {
		type: REMOVE_ALL_EXCEPT,
		payload: {id}
	}
}
