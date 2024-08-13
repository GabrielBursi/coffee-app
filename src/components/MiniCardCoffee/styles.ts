import { Dimensions } from 'react-native'
import { Button } from 'react-native-paper'
import { styled, css } from 'styled-components/native'

const heightCard = Dimensions.get('screen').height / 3

export const MiniCardCoffee = styled.View`
	${({ theme }) => css`
		background-color: ${theme.colors.white};
		border-radius: ${theme.border.radius.big}px;
		flex: 1;
		gap: ${theme.spacings.xsmall}px;
		height: ${heightCard}px;
		padding: ${theme.spacings.xsmall}px;
	`}
`

export const Cover = styled.Image`
	${({ theme }) => css`
		border-radius: ${theme.border.radius.big}px;
		flex: 1;
		max-height: 50%;
	`}
`

export const Content = styled.View`
	${({ theme }) => css`
		flex: 1;
		gap: ${theme.spacings.xxsmall}px;
		justify-content: space-between;
	`}
`

export const Header = styled.View`
	${({ theme }) => css`
		gap: ${theme.spacings.xxsmall}px;
	`}
`

export const Footer = styled.View`
	${({ theme }) => css`
		align-items: center;
		flex-direction: row;
		gap: ${theme.spacings.xsmall}px;
		justify-content: space-between;
	`}
`

export const ButtonStyled = styled(Button)`
	${({ theme }) => css`
		align-self: flex-start;
		border-radius: ${theme.border.radius.big}px;
	`}
`
