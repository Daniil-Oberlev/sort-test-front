import { isSorted, shuffle } from '@/utils/sortingUtils'

export const bogoSortStep = (
	arr: number[],
	step: { i: number; j: number }
): { sortedArray: number[]; step: { i: number; j: number } } => {
	const sortedArray = [...arr]
	if (!isSorted(sortedArray)) {
		return {
			sortedArray: shuffle(sortedArray),
			step: { i: step.i, j: step.j + 1 },
		}
	}
	return { sortedArray, step }
}
