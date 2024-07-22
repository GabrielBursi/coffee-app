import React from 'react'
import { DropdownItemProps } from './types'
import * as S from './styles'

export const DropdownItem = ({
	location,
	isSelected = false,
}: DropdownItemProps) => {
	return (
		<S.DropdownItem testID="dropdown-item" isSelected={isSelected}>
			<S.LocationText
				variant="titleMedium"
				accessibilityRole="text"
				accessibilityLabel={location}
				accessible
			>
				{location}
			</S.LocationText>
		</S.DropdownItem>
	)
}
