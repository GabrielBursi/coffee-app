/* eslint-disable react-native/no-raw-text */
import React from 'react'
import { useTheme } from 'styled-components/native'
import { Icon } from 'react-native-paper'

import * as S from './styles'
import { DropdownButtonProps } from './types'

export const DropdownButton = ({
	isOpen = false,
	location,
}: DropdownButtonProps) => {
	const theme = useTheme()

	return (
		<S.DropdownButton>
			<S.LocationText
				variant="titleMedium"
				accessibilityRole="text"
				accessibilityLabel={location}
				accessible
			>
				{location}
			</S.LocationText>
			<Icon
				source={isOpen ? 'chevron-up' : 'chevron-down'}
				color={theme.colors.white}
				size={15}
				testID={isOpen ? 'chevron-up' : 'chevron-down'}
			/>
		</S.DropdownButton>
	)
}
