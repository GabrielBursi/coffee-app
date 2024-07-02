import React from 'react'
import { Text } from 'react-native'

import { BagScreenProps } from '@/types/screens'

import * as S from './styles'

export const BagScreen = ({ navigation, route }: BagScreenProps) => {
	return (
		<S.Bag>
			<Text accessibilityRole="text">Bag</Text>
		</S.Bag>
	)
}
