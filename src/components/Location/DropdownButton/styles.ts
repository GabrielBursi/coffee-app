import { Text } from 'react-native-paper'
import { styled, css } from 'styled-components/native'

export const DropdownButton = styled.View`
	${({ theme }) => css`
		align-items: center;
		flex-direction: row;
		gap: ${theme.spacings.small}px;
	`}
`

export const LocationText = styled(Text)`
	${({ theme }) => css`
		color: ${theme.colors.white};
		font-family: ${theme.font.family.rubikMedium};
		text-transform: capitalize;
	`}
`
