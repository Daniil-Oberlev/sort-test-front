'use client'

import Layout from '@/components/layout'
import SortVisualizer from '@/components/template/SortVisualizer'
import { insertionSortStep } from '@/functions/insertionSort'

import data from '@/texts/data.json'

const InsertionPage = () => {
	return (
		<>
			<Layout.Header title={data.insertion.title} />
			<Layout.Aside description={data.insertion.description} />
			<SortVisualizer sortStepFunction={insertionSortStep} initialCount={5} />
		</>
	)
}

export default InsertionPage
