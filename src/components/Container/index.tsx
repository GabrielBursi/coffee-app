import React, { PropsWithChildren } from 'react'
import * as S from './styles'

export const Container = ({ children }: PropsWithChildren) => {
	return <S.Container testID="container">{children}</S.Container>
}
