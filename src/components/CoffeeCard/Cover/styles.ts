import { styled, css } from 'styled-components/native'

export const Cover = styled.Image`
	${({ theme }) => css`
		border-radius: ${theme.border.radius.big}px;
		flex: 1;
	`}
`
