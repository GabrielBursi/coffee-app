/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Chip } from 'react-native-paper'
import { useTheme } from 'styled-components/native'

import { NavItemProps } from './types'

export const NavItem = ({ title, isSelected = false }: NavItemProps) => {
	const theme = useTheme()

	return (
		<Chip
			selected={isSelected}
			showSelectedCheck={false}
			compact
			elevated
			accessibilityLabel={title}
			role="menuitem"
			accessibilityRole="menuitem"
			selectedColor={theme.colors.white}
			accessible
			textStyle={{
				color: isSelected ? theme.colors.white : theme.colors.primaryText,
				fontFamily: theme.font.family.poppinsBold,
				fontSize: theme.font.sizes.medium,
			}}
			style={{
				backgroundColor: isSelected
					? theme.colors.primary
					: theme.colors.shadow,
				alignSelf: 'flex-start',
			}}
		>
			{title}
		</Chip>
	)
}
