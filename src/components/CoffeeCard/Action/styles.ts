/* eslint-disable @typescript-eslint/no-unused-vars */
import { darken } from 'polished'
import { styled, css } from 'styled-components/native'

export const Action = styled.Pressable<{ isPressed?: boolean }>`
	${({ theme, isPressed = false }) => css`
		align-items: center;
		background-color: ${isPressed
			? darken(0.2, theme.colors.primary)
			: theme.colors.primary};
		border-radius: ${theme.border.radius.small}px;
		display: flex;
		justify-content: center;
		padding: ${theme.spacings.xsmall}px;
	`}
`
