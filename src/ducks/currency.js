
const CHANGE_CURRENCY = 'CHANGE_CURRENCY'

export default function reducer(state = "", action) {
	const {type, payload} = action

	switch (type) {
		case ADD_PERSON:
			return state.update('entities', entities => entities.push(new PersonRecord(payload)))

		default:
			return state
	}
}