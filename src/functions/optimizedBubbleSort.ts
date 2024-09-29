export const optimizedBubbleSortStep = (
	arr: number[],
	step: { i: number; j: number },
	ascending: boolean = true
): { sortedArray: number[]; step: { i: number; j: number } } => {
	const sortedArray = [...arr]
	let { i, j } = step

	if (i >= sortedArray.length - 1) {
		return { sortedArray, step: { i, j } }
	}

	let swapped = false

	if (ascending) {
		if (sortedArray[j] > sortedArray[j + 1]) {
			;[sortedArray[j], sortedArray[j + 1]] = [
				sortedArray[j + 1],
				sortedArray[j],
			]
			swapped = true
		}
	} else {
		if (sortedArray[j] < sortedArray[j + 1]) {
			;[sortedArray[j], sortedArray[j + 1]] = [
				sortedArray[j + 1],
				sortedArray[j],
			]
			swapped = true
		}
	}

	j++

	if (j >= sortedArray.length - i - 1) {
		i++
		j = 0
	}

	if (!swapped && i > 0) {
		return { sortedArray, step: { i: sortedArray.length - 1, j: 0 } }
	}

	return { sortedArray, step: { i, j } }
}
