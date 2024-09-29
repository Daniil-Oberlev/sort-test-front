export const bubbleSortStep = (
	arr: number[],
	step: { i: number; j: number },
	ascending: boolean = true
): { sortedArray: number[]; step: { i: number; j: number } } => {
	const sortedArray = [...arr]
	let { i, j } = step

	if (i < sortedArray.length - 1) {
		if (j < sortedArray.length - i - 1) {
			if (
				(ascending && sortedArray[j] > sortedArray[j + 1]) ||
				(!ascending && sortedArray[j] < sortedArray[j + 1])
			) {
				;[sortedArray[j], sortedArray[j + 1]] = [
					sortedArray[j + 1],
					sortedArray[j],
				]
			}
			j++
		} else {
			i++
			j = 0
		}
	}

	return { sortedArray, step: { i, j } }
}
