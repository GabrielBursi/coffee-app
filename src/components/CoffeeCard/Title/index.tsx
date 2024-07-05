/* eslint-disable react-native/no-inline-styles */
import React, { memo } from 'react'
import { Card } from 'react-native-paper'
import { useTheme } from 'styled-components/native'

import { TitleProps } from './types'

const TitleMemoized = ({
	subtitle,
	title,
	subtitleVariant = 'titleMedium',
	titleVariant = 'titleLarge',
}: TitleProps) => {
	const theme = useTheme()

	return (
		<Card.Title
			title={title}
			titleVariant={titleVariant}
			subtitleVariant={subtitleVariant}
			subtitle={subtitle}
			titleStyle={{
				color: theme.colors.primaryText,
				textTransform: 'capitalize',
				fontFamily: theme.font.family.rubikBold,
			}}
			subtitleStyle={{
				color: theme.colors.secondaryText,
				textTransform: 'capitalize',
				fontFamily: theme.font.family.rubikMedium,
			}}
		/>
	)
}

export const Title = memo(TitleMemoized)
