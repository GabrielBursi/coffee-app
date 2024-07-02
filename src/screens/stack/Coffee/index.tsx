import React from 'react'
import { Text } from 'react-native'

import { CoffeeScreenProps } from '@/types/screens'
import * as S from './styles'

export const CoffeeScreen = ({ navigation, route }: CoffeeScreenProps) => {
	return (
		<S.Coffee>
			<Text accessibilityRole="text">Coffee</Text>
		</S.Coffee>
	)
}
