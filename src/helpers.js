export function arrayToKeyedArr(array) {
	return array.map((item, index) => {
		return {key: index, value: item};
	})
}