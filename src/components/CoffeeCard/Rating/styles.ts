import { Text } from 'react-native-paper'
import { styled, css } from 'styled-components/native'
import { RatingProps } from './types'

export const Rating = styled.View`
	${({ theme }) => css`
		align-items: center;
		flex-direction: row;
		gap: ${theme.spacings.xxsmall}px;
	`}
`

export const TextStyled = styled(Text)<Pick<RatingProps, 'color'>>`
	${({ theme, color = 'primaryText' }) => css`
		color: ${theme.colors[color]};
		font-family: ${theme.font.family.rubikBold};
	`}
`

export const TotalRanking = styled(Text)`
	${({ theme }) => css`
		color: ${theme.colors.secondaryText};
		font-family: ${theme.font.family.rubikMedium};
	`}
`
