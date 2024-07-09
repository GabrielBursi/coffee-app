/* eslint-disable react-native/no-raw-text */
import React, { memo, useMemo } from 'react'
import { Icon } from 'react-native-paper'

import { RatingProps } from './types'
import * as S from './styles'

const RatingMemoized = ({
	rating,
	max = 5,
	totalRanking = 0,
	size = 'titleMedium',
	color = 'primaryText',
}: RatingProps) => {
	const formattedRating = Math.min(rating, max).toFixed(1)

	const iconSize = useMemo(() => {
		return size === 'titleMedium' ? 20 : 14
	}, [size])

	return (
		<S.Rating>
			<Icon testID="icon-star" size={iconSize} source="star" color="gold" />
			<S.TextStyled
				variant={size}
				color={color}
				accessible
				accessibilityLabel={`${formattedRating}`}
				accessibilityRole="text"
			>
				{formattedRating}
			</S.TextStyled>
			{!!totalRanking && (
				<S.TotalRanking
					accessible
					accessibilityRole="text"
					accessibilityLabel={`${totalRanking}`}
					variant="labelMedium"
				>
					({totalRanking})
				</S.TotalRanking>
			)}
		</S.Rating>
	)
}

export const Rating = memo(RatingMemoized)
