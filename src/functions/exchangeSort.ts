export const exchangeSortStep = (
	arr: number[],
	step: { i: number; j: number },
	ascending: boolean = true
): { sortedArray: number[]; step: { i: number; j: number } } => {
	const sortedArray = [...arr]
	let { i, j } = step

	if (i < sortedArray.length - 1) {
		if (j < sortedArray.length) {
			if (
				(ascending && sortedArray[i] > sortedArray[j]) ||
				(!ascending && sortedArray[i] < sortedArray[j])
			) {
				;[sortedArray[i], sortedArray[j]] = [sortedArray[j], sortedArray[i]]
			}
			j++
		} else {
			i++
			j = i + 1
		}
	}

	return { sortedArray, step: { i, j } }
}
