'use client'

import Layout from '@/components/layout'
import SortVisualizer from '@/components/template/SortVisualizer'
import { exchangeSortStep } from '@/functions/exchangeSort'

import data from "@/texts/data.json" with { type: 'json' }

const ExchangePage = () => {
	return (
		<>
			<Layout.Header title={data.exchange.title} />
			<Layout.Aside description={data.exchange.description} />
			<SortVisualizer sortStepFunction={exchangeSortStep} initialCount={5} />
		</>
	)
}

export default ExchangePage
