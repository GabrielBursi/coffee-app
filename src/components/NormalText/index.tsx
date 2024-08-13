import React from 'react'

import { TypographyProps } from '@/types/shared'

import * as S from './styles'

export const NormalText = ({ children, ...restProps }: TypographyProps) => {
	return (
		<S.NormalText
			variant="titleMedium"
			accessible
			accessibilityLabel={children}
			aria-label={children}
			{...restProps}
		>
			{children}
		</S.NormalText>
	)
}
