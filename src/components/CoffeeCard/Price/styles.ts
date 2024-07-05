/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled, css } from 'styled-components/native'

import { PriceProps } from './types'

export const Price = styled.Text<Pick<PriceProps, 'size'>>`
	${({ theme, size = 'medium' }) => css`
		color: ${theme.colors.primaryText};
		font-family: ${theme.font.family.rubikBold};
		font-size: ${theme.font.sizes[size]}px;
		font-weight: ${theme.font.bold};
	`}
`
