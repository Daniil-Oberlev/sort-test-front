'use client'

import Layout from '@/components/layout'
import SortVisualizer from '@/components/template/SortVisualizer'
import { bogoSortStep } from '@/functions/bogoSort'

import data from '@/texts/data.json'

const BogoPage = () => {
	return (
		<>
			<Layout.Header title={data.bogo.title} />
			<Layout.Aside description={data.bogo.description} />
			<SortVisualizer sortStepFunction={bogoSortStep} initialCount={5} />
		</>
	)
}

export default BogoPage
