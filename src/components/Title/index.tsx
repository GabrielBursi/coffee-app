import React from 'react'
import { TitleProps } from './types'
import * as S from './styles'

export const Title = ({ children }: TitleProps) => {
	return (
		<S.Title
			variant="headlineSmall"
			accessible
			accessibilityLabel={children}
			aria-label={children}
			numberOfLines={1}
			ellipsizeMode="tail"
		>
			{children}
		</S.Title>
	)
}
