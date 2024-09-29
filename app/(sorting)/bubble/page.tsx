'use client'

import Layout from '@/components/layout'
import SortVisualizer from '@/components/template/SortVisualizer'
import { bubbleSortStep } from '@/functions/bubbleSort'

import data from "@/texts/data.json" with { type: 'json' }

const BubblePage = () => {
	return (
		<>
			<Layout.Header title={data.bubble.title} />
			<Layout.Aside description={data.bubble.description} />
			<SortVisualizer sortStepFunction={bubbleSortStep} initialCount={5} />
		</>
	)
}

export default BubblePage
