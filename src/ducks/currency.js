export const CHANGE_CURRENCY = 'CHANGE_CURRENCY'

export default function reducer(state = 'RUB', action) {
	const {type, payload} = action

	switch (type) {
		case CHANGE_CURRENCY:
			return payload.currency

		default:
			return state
	}
}

export function changeCurrency(currency) {
	return {
		type: CHANGE_CURRENCY,
		payload: {currency}
	}
}