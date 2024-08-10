import React from 'react'
import { NormalTextProps } from './types'
import * as S from './styles'

export const NormalText = ({ children }: NormalTextProps) => {
	return (
		<S.NormalText
			variant="titleMedium"
			accessible
			accessibilityLabel={children}
			aria-label={children}
		>
			{children}
		</S.NormalText>
	)
}
