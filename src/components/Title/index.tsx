import React from 'react'
import { TitleProps } from './types'
import * as S from './styles'

export const Title = ({ children }: TitleProps) => {
	return (
		<S.Title
			variant="titleLarge"
			accessible
			accessibilityLabel={children}
			aria-label={children}
		>
			{children}
		</S.Title>
	)
}
