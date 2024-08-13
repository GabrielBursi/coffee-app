import React from 'react'

import { TypographyProps } from '@/types/shared'

import * as S from './styles'

export const Title = ({ children, ...restoProps }: TypographyProps) => {
	return (
		<S.Title
			variant="headlineSmall"
			accessible
			accessibilityLabel={children}
			aria-label={children}
			numberOfLines={1}
			ellipsizeMode="tail"
			{...restoProps}
		>
			{children}
		</S.Title>
	)
}
