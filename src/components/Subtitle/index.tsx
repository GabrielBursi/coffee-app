import React from 'react'

import { TypographyProps } from '@/types/shared'
import * as S from './styles'

export const Subtitle = ({ children, ...restProps }: TypographyProps) => {
	return (
		<S.Subtitle
			variant="titleLarge"
			accessible
			accessibilityLabel={children}
			aria-label={children}
			numberOfLines={1}
			ellipsizeMode="tail"
			{...restProps}
		>
			{children}
		</S.Subtitle>
	)
}
