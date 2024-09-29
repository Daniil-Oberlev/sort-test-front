export const shuffle = (arr: number[]): number[] => {
	let count = arr.length,
		temp,
		index
	while (count > 0) {
		index = Math.floor(Math.random() * count)
		count--

		temp = arr[count]
		arr[count] = arr[index]
		arr[index] = temp
	}
	return arr
}

export const generateRandomSizes = (count: number): number[] => {
	const sizes: number[] = []
	for (let i = 1; i <= count; i++) {
		sizes.push((100 / count) * i)
	}
	return sizes.reverse()
}

export const isSorted = (arr: number[]): boolean => {
	for (let i = 1; i < arr.length; i++) {
		if (arr[i - 1] > arr[i]) {
			return false
		}
	}
	return true
}
