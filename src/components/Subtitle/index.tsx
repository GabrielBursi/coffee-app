import React from 'react'
import { SubtitleProps } from './types'
import * as S from './styles'

export const Subtitle = ({ children }: SubtitleProps) => {
	return (
		<S.Subtitle
			variant="titleLarge"
			accessible
			accessibilityLabel={children}
			aria-label={children}
			numberOfLines={1}
			ellipsizeMode="tail"
		>
			{children}
		</S.Subtitle>
	)
}
