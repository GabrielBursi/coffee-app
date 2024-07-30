import { styled, css } from 'styled-components/native'

export const Separator = styled.View`
	${({ theme }) => css`
		padding: ${theme.spacings.xsmall}px;
	`}
`
