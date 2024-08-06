/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text } from 'react-native-paper'
import { styled, css } from 'styled-components/native'

export const Title = styled(Text)`
	${({ theme }) => css`
		color: ${theme.colors.primaryText};
		font-family: ${theme.font.family.poppinsBold};
		text-transform: capitalize;
	`}
`
