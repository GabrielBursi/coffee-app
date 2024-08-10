import { useCallback } from 'react'

export const useFormat = () => {
	const formatCurrency = useCallback(
		(
			currencyValue: number,
			locales: Intl.LocalesArgument = 'pt-BR',
			currency = 'BRl'
		) => {
			const numberFormat = new Intl.NumberFormat(locales, {
				style: 'currency',
				currency: currency,
			})

			return numberFormat.format(currencyValue)
		},
		[]
	)

	return {
		formatCurrency,
	}
}
