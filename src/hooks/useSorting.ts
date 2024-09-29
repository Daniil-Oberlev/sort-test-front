import { useSort, useSortState } from '@/hooks/sortingHooks'
import { generateRandomSizes, isSorted } from '@/utils/sortingUtils'
import { useCallback, useEffect } from 'react'

const useSorting = (
	sortStepFunction: (
		arr: number[],
		step: { i: number; j: number }
	) => { sortedArray: number[]; step: { i: number; j: number } },
	initialCount: number
) => {
	const { state, setState, reset } = useSortState(
		initialCount,
		generateRandomSizes
	)

	const startSort = useCallback(() => {
		setState(prevState => ({
			...prevState,
			sorting: true,
		}))
	}, [setState])

	useEffect(() => {
		reset()
		startSort()
	}, [reset, startSort])

	useSort(state, setState, (arr, step) => {
		const { sortedArray, step: newStep } = sortStepFunction(arr, step)
		setState(prevState => ({
			...prevState,
			items: sortedArray,
			step: newStep,
			sorted: isSorted(sortedArray),
		}))

		return { sortedArray, step: newStep }
	})

	return { state }
}

export default useSorting
