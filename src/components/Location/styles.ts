import { Text } from 'react-native-paper'
import { styled, css } from 'styled-components/native'

export const Location = styled.Pressable`
	${({ theme }) => css`
		gap: ${theme.spacings.xxsmall}px;
		justify-content: center;
	`}
`

export const Label = styled(Text)`
	${({ theme }) => css`
		color: ${theme.colors.secondaryText};
		font-family: ${theme.font.family.rubikLight};
		text-transform: capitalize;
	`}
`
