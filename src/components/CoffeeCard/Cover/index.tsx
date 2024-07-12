import React from 'react'
import { CoverProps } from './types'
import * as S from './styles'

export const Cover = (props: CoverProps) => {
	return (
		<S.Cover
			accessible
			role="img"
			aria-label="cover-coffee"
			accessibilityLabel="cover-coffee"
			alt="cover-coffee"
			resizeMode="cover"
			{...props}
		/>
	)
}
