'use client'

import Layout from '@/components/layout'
import SortVisualizer from '@/components/template/SortVisualizer'
import { optimizedBubbleSortStep } from '@/functions/optimizedBubbleSort'

import data from '@/texts/data.json'

const optimizedBubblePage = () => {
	return (
		<>
			<Layout.Header title={data.optimized_bubble.title} />
			<Layout.Aside description={data.optimized_bubble.description} />
			<SortVisualizer
				sortStepFunction={optimizedBubbleSortStep}
				initialCount={5}
			/>
		</>
	)
}

export default optimizedBubblePage
