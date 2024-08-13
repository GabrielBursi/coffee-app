import { styled, css } from 'styled-components/native'

export const Separator = styled.View`
	${({ theme }) => css`
		background-color: red;
		padding-top: ${theme.spacings.xsmall}px;
	`}
`
