import { Text } from 'react-native-paper'
import { styled, css } from 'styled-components/native'
import { lighten } from 'polished'

import { DropdownItemProps } from './types'

export const DropdownItem = styled.View<Pick<DropdownItemProps, 'isSelected'>>`
	${({ theme, isSelected = false }) => css`
		align-items: center;
		background-color: ${isSelected
			? lighten(0.1, theme.colors.secondaryBg)
			: theme.colors.secondaryBg};
		border-radius: ${theme.border.radius.big}px;
		flex-direction: row;
		gap: ${theme.spacings.xxsmall}px;
		justify-content: space-between;
		padding: ${theme.spacings.xsmall}px ${theme.spacings.small}px;
	`}
`

export const LocationText = styled(Text)`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-family: ${theme.font.family.rubikMedium};
		text-transform: capitalize;
	`}
`
