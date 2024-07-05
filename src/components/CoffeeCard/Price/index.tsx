import React, { memo } from 'react'

import { PriceProps } from './types'
import * as S from './styles'

const PriceMemoized = ({ price, size = 'medium' }: PriceProps) => {
	const priceFormatted = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(price)

	return (
		<S.Price
			accessibilityLabel={priceFormatted}
			accessibilityRole="text"
			accessible
			aria-label={priceFormatted}
			size={size}
		>
			{priceFormatted}
		</S.Price>
	)
}

export const Price = memo(PriceMemoized)
