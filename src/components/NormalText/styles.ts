/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text } from 'react-native-paper'
import { styled, css } from 'styled-components/native'

export const NormalText = styled(Text)`
	${({ theme }) => css`
		color: ${theme.colors.secondaryText};
		font-family: ${theme.font.family.poppinsRegular};
	`}
`
