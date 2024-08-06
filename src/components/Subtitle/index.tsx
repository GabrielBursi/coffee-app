import React from 'react'
import { SubtitleProps } from './types'
import * as S from './styles'

export const Subtitle = ({ children }: SubtitleProps) => {
	return (
		<S.Subtitle
			variant="titleMedium"
			accessible
			accessibilityLabel={children}
			aria-label={children}
		>
			{children}
		</S.Subtitle>
	)
}
