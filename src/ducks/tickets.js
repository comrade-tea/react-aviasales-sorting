import data from '../tickets'
// export const CHANGE_CURRENCY = 'CHANGE_CURRENCY'

const defaultState = data.tickets.map((item, index) => {
	return {...item, id: index}
})

export default function reducer(state = defaultState, action) {
	const {type, payload} = action

	switch (type) {
		// case CHANGE_CURRENCY:
		// 	return payload.currency

		default:
			return state
	}
}

/*
export function filterTickets(currency) {
	return {
		type: CHANGE_CURRENCY,
		payload: {currency}
	}
}*/
